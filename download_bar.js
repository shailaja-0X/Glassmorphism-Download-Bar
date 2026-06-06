let count = 0;

let intv;

let downloadState = "idle";

let progress = document.querySelector(".progress-bar");
let percentage = document.querySelector(".percentage");

function startDownload()
{
    clearInterval(intv);

   intv = setInterval(function()
{
    if(count < 100)
    {
        count++;
        progress.style.width = `${count}%`;
        percentage.textContent = `${count}%`;
    }
    else{
        document.querySelector(".status-text").textContent = "Downloaded";
        document.querySelector(".download-btn").textContent = "Done";
        clearInterval(intv);
        downloadState = "completed";
    }
}, 10000/100);
}




document.querySelector(".download-btn").addEventListener("click", function()
{
    if(downloadState === "idle")
    {
        downloadState = "running";
        document.querySelector(".status-text").textContent = "Downloading...";
        document.querySelector(".download-btn").textContent = "Pause Download";
        document.body.classList.add("animate-bg");
        startDownload();
    }
    else if(downloadState === "running")
    {
        downloadState = "paused";
        document.querySelector(".status-text").textContent = "Paused";
        document.querySelector(".download-btn").textContent = "Resume Download";
        clearInterval(intv);
        document.body.classList.remove("animate-bg");
    }
    else if(downloadState === "paused")
    {
        downloadState = "running";
        document.querySelector(".status-text").textContent = "Downloading...";
        document.querySelector(".download-btn").textContent = "Pause Download";
        document.body.classList.add("animate-bg");
        startDownload();
    }
});
