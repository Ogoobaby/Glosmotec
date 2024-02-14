const networkOptions = {
    mtn: {
        data: ["1GB - ₦250", "2GB - ₦500", "3GB - ₦750", "4GB - ₦1,000", "5GB - ₦1,250", "6GB - ₦1,500", "7GB - ₦1,750", "8GB - ₦2,000", "9GB - ₦2,250", "10GB - ₦2,500"],
        airtime: ["₦90", "₦450", "₦900", "₦1,800", "₦2,700", "₦3,600", "₦4,500", "₦5,400", "₦6,300", "₦7,200", "₦9,000"]
    },
    glo: {
        data: ["1GB - ₦200", "2GB - ₦400", "3GB - ₦600", "4GB - ₦800", "5GB - ₦1,000", "6GB - ₦1,200", "7GB - ₦1,400", "8GB - ₦1,600", "9GB - ₦1,800", "10GB - ₦2,000"],
        airtime: ["₦90", "₦450", "₦900", "₦1,800", "₦2,700", "₦3,600", "₦4,500", "₦5,400", "₦6,300", "₦7,200", "₦9,000"]
    },
    airtel: {
        data: ["1GB - ₦300", "2GB - ₦600", "3GB - ₦900", "4GB - ₦1,200", "5GB - ₦1,500", "6GB - ₦1,800", "7GB - ₦2,100", "8GB - ₦2,400", "9GB - ₦2,700", "10GB - ₦3,000"],
        airtime: ["₦95", "₦475", "₦950", "₦1,900", "₦2,850", "₦3,800", "₦4,750", "₦5,700", "₦6,650", "₦7,600", "₦9,500"]
    },
    nineMobile: {
        data: ["1GB - ₦270", "2GB - ₦540", "3GB - ₦810", "4GB - ₦1,080", "5GB - ₦1,350", "6GB - ₦1,620", "7GB - ₦1,890", "8GB - ₦2,160", "9GB - ₦2,430", "10GB - ₦2,700"],
        airtime: ["₦95", "₦475", "₦950", "₦1,900", "₦2,850", "₦3,800", "₦4,750", "₦5,700", "₦6,650", "₦7,600", "₦9,500"]
    }
};

const sidebarItems = document.querySelectorAll('.sidebar li');
const dataMenu = document.getElementById('dataMenu');
const airtimeMenu = document.getElementById('airtimeMenu');
const phoneNumberInput = document.getElementById('phoneNumber');
const buyButton = document.getElementById('buyButton');

let activeNetwork = null;

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebarItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
        activeNetwork = item.id;
        renderOptions(activeNetwork);
    });
});

function renderOptions(network) {
    dataMenu.innerHTML = '';
    airtimeMenu.innerHTML = '';

    const listItemData = document.createElement('li');
    listItemData.textContent = 'Select Data Bundle';
    dataMenu.appendChild(listItemData);

    const listItemAirtime = document.createElement('li');
    listItemAirtime.textContent = 'Select Airtime Amount';
    airtimeMenu.appendChild(listItemAirtime);

    listItemData.addEventListener('click', () => {
        listItemData.classList.add('active');
        listItemAirtime.classList.remove('active');
        displayDataOptions(network);
    });

    listItemAirtime.addEventListener('click', () => {
        listItemData.classList.remove('active');
        listItemAirtime.classList.add('active');
        displayAirtimeOptions(network);
    });
}

function displayDataOptions(network) {
    dataMenu.innerHTML = '';
    networkOptions[network].data.forEach(option => {
        const listItem = document.createElement('li');
        listItem.textContent = option;
        dataMenu.appendChild(listItem);
    });
}

function displayAirtimeOptions(network) {
    airtimeMenu.innerHTML = '';
    networkOptions[network].airtime.forEach(option => {
        const listItem = document.createElement('li');
        listItem.textContent = option;
        airtimeMenu.appendChild(listItem);
    });
}

buyButton.addEventListener('click', () => {
    const phoneNumber = phoneNumberInput.value.trim();
    if (phoneNumber.length === 11) {
        alert('Successfully Sent!');
    } else {
        alert('Please enter a valid phone number!');
    }
});
