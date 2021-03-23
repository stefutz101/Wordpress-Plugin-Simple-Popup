// When the user clicks on the button, open the modal
var timer;
var cookie = getCookie('presupuesto_sent');
var modal = document.querySelector('#presupuesto');
var form = document.querySelector('#presupuesto form');
var span = document.querySelector('#presupuesto .close');
var btns = document.querySelectorAll('a.pide_presupuesto');

// When the user clicks anywhere outside of the modal, close it
modal.onclick = (ev) => {
    if (ev.target == modal) {
        hideModal();
    }
}

// When the user sends the form, hide it next time
form.onsubmit = () => {
    setCookie('presupuesto_sent', true, 30);
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    hideModal();
};

// When the user clicks on the button, display the modal
btns.forEach((btn) => {
    btn.onclick = (e) => {
        e.preventDefault();
        
        clearTimeout(timer);
        showModal();
    };
});

// If the form was sent don't show it again
if (cookie != 'true') {
    timer = setTimeout(() => {
        showModal();
    }, 30*1000);
}

var showModal = () => {
    modal.style.display = "block";
}

var hideModal = () => {
    modal.style.display = "none";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}