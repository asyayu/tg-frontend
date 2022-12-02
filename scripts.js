window.onload=function()
{
    document.getElementById("regex").onchange=function()
    {
        if(this.checked==true)
        {
            document.getElementById("advanced-search").disabled=true;
        }
        else
        {
            document.getElementById("advanced-search").disabled=false;
        }
    }

    document.getElementById("simple").onchange=function()
    {
        if(this.checked==true)
        {
            document.getElementById("advanced-search").disabled=false;
        }
        else
        {
            document.getElementById("advanced-search").disabled=true;
        }
    }

}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// function disableButton() {
// if (document.querySelector("#regex").checked === true) {
//     document.querySelector("#more-search-options").disabled = true;
// }
// };

