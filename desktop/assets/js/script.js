const folders =
    [
        {
            folderID: 1,
            folderName: "My Computer",
            folderIcon: "fa-solid fa-computer",
            folderFiles:
                [
                    {
                        imagesTitle: "Local Disk(C:)",
                        imagesUrl: "./assets/img/computer-folder/hdd.svg",
                        progresssBar: 60
                    },
                    {
                        imagesTitle: "Local Disk(D:)",
                        imagesUrl: "./assets/img/computer-folder/hdd.svg",
                        progresssBar: 78
                    },
                ],
        },
        {
            folderID: 2,
            folderName: "My Documents",
            folderIcon: "fa-solid fa-folder-open",
            folderFiles:
                [
                    {
                        imagesTitle: "Word",
                        imagesUrl: "./assets/img/document-folder/word.png"
                    },
                    {
                        imagesTitle: "Exel",
                        imagesUrl: "./assets/img/document-folder/exel.png"
                    },
                    {
                        imagesTitle: "PowerPoint",
                        imagesUrl: "./assets/img/document-folder/powerpoint.png"
                    }
                ],
        },
        {
            folderID: 3,
            folderName: "My İmages",
            folderIcon: "fa-solid fa-images",
            folderFiles:
                [
                    {
                        imagesTitle: "İmages-1",
                        imagesUrl: "./assets/img/images-folder/image-1.avif"
                    },
                    {
                        imagesTitle: "İmages-2",
                        imagesUrl: "./assets/img/images-folder/image-2.avif"
                    },
                    {
                        imagesTitle: "İmages-3",
                        imagesUrl: "./assets/img/images-folder/image-3.avif"
                    },
                    {
                        imagesTitle: "İmages-4",
                        imagesUrl: "./assets/img/images-folder/image-4.avif"
                    },
                    {
                        imagesTitle: "İmages-5",
                        imagesUrl: "./assets/img/images-folder/image-5.avif"
                    }
                ],
        },
        {
            folderID: 4,
            folderName: "Games",
            folderIcon: "fa-solid fa-gamepad",
            folderFiles: [],
        }
    ]

const desktopFolders = document.getElementById('desktop-folders')
// desktop folders ekler
const addDesktopFolders = (item) => {
    let innDocument =
        `
    <div onClick=(openfolder(${item.folderID})) class="col text-center btn">
        <i class="${item.folderIcon} fa-2x"></i>
        <h6 class="mt-1">${item.folderName}</h6>
    </div>
    `
    return innDocument
}
let value = ''
folders.map((item) => {
    value += addDesktopFolders(item)
})
desktopFolders.innerHTML = value
// ekleme biter





const createfolder = (folderObj) => {
    const folderBody = document.getElementById("folderBody")
    let files = ''
    folderObj.folderFiles.map((item) => (
        files +=
        `
        <div onClick=(openPopUp(${item})) class="folder-file-item">
        <div class="folder-file-item-img"><img class="w-100 img-fluid" src="${item.imagesUrl}" alt=""></div>
        <div class="text-center pt-2">${item.imagesTitle}</div>
    `,

        item.progresssBar ?
            files += `<div class="progress mt-2">
                         <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: ${item.progresssBar}%" aria-valuenow="${item.progresssBar}" aria-valuemin="0" aria-valuemax="100">${item.progresssBar}%</div>
                     </div></div>`
            : files += `</div>`
    ))
    folderBody.innerHTML = files
}





const openPopUp = (image) => {
    console.log(image)
}








const folderName = document.getElementById('folder-name')
const closeFolder = document.getElementById('close-folder')
const documentElement = document.getElementById('document')
// close folder
closeFolder.addEventListener('click', () => {
    documentElement.classList.remove("folder-active")
    documentElement.classList.add("folder-passive")
})

// open folder
const openfolder = (itemID) => {

    const folder = folders.find((item) => item.folderID == itemID)
    folderName.innerText = folder.folderName
    createfolder(folder)
    documentElement.classList.add("folder-active")
    documentElement.classList.remove("folder-passive")
}