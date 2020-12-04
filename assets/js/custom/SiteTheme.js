// Change when button clicked
function toggleTheme() {
    if (localStorage.getItem('PezhvakAgencyTheme') === 'LightTheme') {
        localStorage.setItem('PezhvakAgencyTheme', 'DarkTheme');
        document.getElementById('slider').checked = true;
        document.getElementById('slider2').checked = true;
        document.getElementById("dark-theme").disabled = false;
    } else {
        localStorage.setItem('PezhvakAgencyTheme', 'LightTheme');
        document.getElementById('slider').checked = false;
        document.getElementById('slider2').checked = false;
        document.getElementById("dark-theme").disabled = true;
    }
}


// Check when page loaded
(function () {
    if (localStorage.getItem('PezhvakAgencyTheme') === 'DarkTheme') {
        localStorage.setItem('PezhvakAgencyTheme', 'DarkTheme');
        try {
            document.getElementById('slider').checked = true;
            document.getElementById('slider2').checked = true;
        } catch (error) {
            // 
        }
        document.getElementById("dark-theme").disabled = false;
    } else if (localStorage.getItem('PezhvakAgencyTheme') === 'LightTheme'){
        localStorage.setItem('PezhvakAgencyTheme', 'LightTheme');
        try {
            document.getElementById('slider').checked = false;
            document.getElementById('slider2').checked = false;
        } catch (error) {
            // 
        }
        document.getElementById("dark-theme").disabled = true;
    } else {
        localStorage.setItem('PezhvakAgencyTheme', 'LightTheme');
        try {
            document.getElementById('slider').checked = false;
            document.getElementById('slider2').checked = false; 
        } catch (error) {
            // 
        }
        document.getElementById("dark-theme").disabled = true;
    }
}());