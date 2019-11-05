const {Menu, ipcMain} = require('electron');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', () => {
	mainWindow = new BrowserWindow({ width: 1200, height: 1000, center: true });
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	//mainWindow.webContents.openDevTools();

	var template = [
	  {
	    label: 'File',
	    submenu: [
	      {
	      	label: "New...",
	      	click () { mainWindow.webContents.send("controller-method", { method: "createNewProject" }) }
	      },
	      {
	        label: "Open Project...",
	        click () { mainWindow.webContents.send("controller-method", {method: 'openProject'}) }
	      },
	      {
	      	type: 'separator'
	      },
	      {
	        label: "Save Project",
	        click () { mainWindow.webContents.send("controller-method", {method: 'saveCurrentProject', promptForName: false}) }
	      },
	      {
	        label: "Save Project As...",
	        click () { mainWindow.webContents.send("controller-method", {method: 'saveCurrentProject', promptForName: true}) }
	      },
	      {
	      	type: 'separator'
	      },
	      {
	      	label: "Close Project",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'closeProject'}) }
	      }
	    ]
	  },
	  {
	    label: 'Edit',
	    submenu: [
	      {
	        role: 'undo'
	      },
	      {
	        role: 'redo'
	      },
	      {
	        type: 'separator'
	      },
	      {
	        role: 'cut'
	      },
	      {
	        role: 'copy'
	      },
	      {
	        role: 'paste'
	      },
	      {
	        role: 'pasteandmatchstyle'
	      },
	      {
	        role: 'delete'
	      },
	      {
	        role: 'selectall'
	      }
	    ]
	  },
	  {
	    label: 'View',
	    submenu: [
	      {
	        role: 'resetzoom'
	      },
	      {
	        role: 'zoomin'
	      },
	      {
	        role: 'zoomout'
	      },
	      {
	        type: 'separator'
	      },
	      {
	        role: 'togglefullscreen'
	      },
	      {
	        type: 'separator'
	      },
	      {
	      	label: "Show Grid",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'showGrid'}) }
	      },
	      {
	      	label: "Hide Grid",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'hideGrid'}) }
	      },
	      {
	      	label: "Edit Grid...",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'editGrid'}) }
	      },
	      {
	      	label: "Snap To Grid",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'snapToGrid'}) }
	      },
	      {
	      	type: 'separator'
	      },
	      {
	        label: 'Re-Initialize Luster IDE',
	        accelerator: 'CmdOrCtrl+R',
	        click (item, focusedWindow) {
	          if (focusedWindow) focusedWindow.reload()
	        }
	      },
	      {
	        label: 'Toggle Developer Tools',
	        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
	        click (item, focusedWindow) {
	          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
	        }
	      }
	    ]
	  },
	  {
	    label: 'Modify',
	    submenu: [
	      {
	      	label: "Document...",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'modifyDocument'}) }
	      },
	      {
	      	type: 'separator'
	      },
	      {
	      	label: "Transform",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'transformObject'}) }
	      },
	      {
	      	label: "Arrange",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'arrangeObject'}) }
	      },
	      {
	      	label: "Align",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'alignObject'}) }
	      },
	      {
	      	type: 'separator'
	      },
	      {
	      	label: "Group",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'groupObjects'}) }
	      },
	      {
	      	label: "Ungroup",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'ungroupObjects'}) }
	      }
	    ]
	  },
	  {
	    label: 'Control',
	    submenu: [
	      {
	      	label: "Play",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'playTimeline'}) }
	      },
	      {
	      	label: "Rewind",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'rewindTimeline'}) }
	      },
	      {
	      	label: "Go To End",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'goToEndTimeline'}) }
	      },
	      {
	      	type: 'separator'
	      },
	      {
	      	label: "Step Forward One Frame",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'stepForwardOneFrame'}) }
	      },
	      {
	      	label: "Step Backward One Frame",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'stepBackwardOneFrame'}) }
	      },
	      {
	      	type: 'separator'
	      },
	      {
	      	label: "Loop Playback",
	      	click () { mainWindow.webContents.send("controller-method", {method: 'toggleLoopPlayback'}) }
	      }
	    ]
	  },
	  {
	    role: 'window',
	    submenu: [
	      {
	        role: 'minimize'
	      },
	      {
	        role: 'close'
	      }
	    ]
	  },
	  {
	    role: 'help',
	    submenu: [
	      {
	      	label: 'Online Documentation',
	      	click () { require('electron').shell.openExternal('http://connectopus.org/docs') }
	      }
	    ]
	  }
	]

	if (process.platform === 'darwin') {
	  const name = app.getName()
	  template.unshift({
	    label: name,
	    submenu: [
	      {
	        role: 'about'
	      },
	      {
	        type: 'separator'
	      },
	      {
	        role: 'services',
	        submenu: []
	      },
	      {
	        type: 'separator'
	      },
	      {
	        role: 'hide'
	      },
	      {
	        role: 'hideothers'
	      },
	      {
	        role: 'unhide'
	      },
	      {
	        type: 'separator'
	      },
	      {
	        role: 'quit'
	      }
	    ]
	  })
	  // Edit menu.
	  template[2].submenu.push(
	    {
	      type: 'separator'
	    },
	    {
	      label: 'Speech',
	      submenu: [
	        {
	          role: 'startspeaking'
	        },
	        {
	          role: 'stopspeaking'
	        }
	      ]
	    }
	  )
	  // Window menu.
	  template[5].submenu = [
	    {
	      label: 'Close',
	      accelerator: 'CmdOrCtrl+W',
	      role: 'close'
	    },
	    {
	      label: 'Minimize',
	      accelerator: 'CmdOrCtrl+M',
	      role: 'minimize'
	    },
	    {
	      label: 'Zoom',
	      role: 'zoom'
	    },
	    {
	      type: 'separator'
	    },
	    {
	      label: 'Bring All to Front',
	      role: 'front'
	    }
	  ]
	}
	Menu.setApplicationMenu(Menu.buildFromTemplate(template))
});