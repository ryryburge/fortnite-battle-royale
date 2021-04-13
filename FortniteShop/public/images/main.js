  nodeIntegration: true,
    },
  });
  win.loadFile("shop.html");
  win.loadFile("./public/shop.html");
  win.once("ready-to-show", () => {
    win.show();
  });
