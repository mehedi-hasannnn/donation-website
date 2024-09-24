document.getElementById('btn-show-history').addEventListener('click',function(){
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('donation').classList.add('hidden');
});

document.getElementById('btn-show-donation').addEventListener('click', function(){
    document.getElementById('donation').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
});

// toggling color of buttons

document.addEventListener('DOMContentLoaded', function() {
    const btnShowDonation = document.getElementById('btn-show-donation');
    const btnShowHistory = document.getElementById('btn-show-history');
    const donationSection = document.getElementById('donation');
    const historySection = document.getElementById('history');

    function toggleActive(buttonToActivate, sectionToShow, buttonToDeactivate, sectionToHide) {
        buttonToActivate.classList.add('bg-[#B4F461]');
        buttonToActivate.classList.remove('bg-white');
        
        buttonToDeactivate.classList.add('bg-white');
        buttonToDeactivate.classList.remove('bg-[#B4F461]');

        sectionToShow.classList.remove('hidden');
        sectionToHide.classList.add('hidden');
    }

    toggleActive(btnShowDonation, donationSection, btnShowHistory, historySection);

    btnShowDonation.addEventListener('click', function() {
        toggleActive(btnShowDonation, donationSection, btnShowHistory, historySection);
    });

    btnShowHistory.addEventListener('click', function() {
        toggleActive(btnShowHistory, historySection, btnShowDonation, donationSection);
    });
});

