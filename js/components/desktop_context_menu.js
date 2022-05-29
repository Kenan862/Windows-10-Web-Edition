function desktop_context_menu() {
    $.contextMenu({
            selector: '.desktop', 
            callback: function(key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m); 
            },
            items: {
                "reload": {
                    name: "Reload System", 
                    icon: "fa-arrows-rotate",
                    callback: function(){
                        window.location.reload();
                    }
                },
                "cut": {name: "Cut", icon: "cut"},
               copy: {name: "Copy", icon: "copy"},
                "paste": {name: "Paste", icon: "paste"},
                "delete": {name: "Delete", icon: "delete"},
                "sep1": "---------",
                "quit": {name: "Quit", icon: function(){
                    return 'context-menu-icon context-menu-icon-quit';
                }}
            }
        });

        $('.desktop').on('click', function(e){
            console.log('clicked', this);
        })    
}

export{desktop_context_menu}