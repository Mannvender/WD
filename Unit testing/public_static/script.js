$(function () {

    let kmBox = $('#km');
    let minBox = $('#min');
    let calBtn = $('#calfare');
    let fareDiv = $('#farediv');
    let rateBtn = $('#rateBtn');
    let rateDiv = $('#rateDiv');

    calBtn.click(function () {
        $.post('/calfare', {
            km: kmBox.val(),
            min: minBox.val()
        }, function (data) {
            fareDiv.text(`Fare : ${data.fare} Rs.`)
        })
    })

    rateBtn.click(function () {
        $.get('/rate', function (data) {
            let prettyStringRates = `
            Fixed Fare = Rs. ${data.fixed} for ${data.minKm} KM 
            <br>
            Fare (Distance) = Rs. ${data.perKm} / KM
            <br>
            Fare (Waiting) = Rs. ${data.perKm} / min (after first ${data.freeMin} minutes)
            `;
            rateDiv.html(prettyStringRates)
        })
    })


});