/*document.addEventListener("DOMContentLoaded", function() {
    const startDate = document.getElementById("start_date");
    const endDate = document.getElementById("end_date");
    const totalPrice = document.getElementById("total");
    const picePErNight = 46;


    //Initialisation des dates
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    startDate.value = today.toISOString().split('T')[0];
    endDate.value = tomorrow.toISOString().split('T')[0];

    startDate.min = today;


    //End Date forcément à j+1 de la start date
    startDate.addEventListener('change', function() {
        let sDate = new Date(startDate.value);
        let minEndDate = new Date(sDate);
        minEndDate.setDate(sDate.getDate() + 1);

        endDate.value = minEndDate.toISOString().split('T')[0];
        endDate.min = minEndDate.toISOString().split('T')[0];
    });

    //Calcul du prix total 
    
})*/


const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

//Tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

//Convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;


start_date.addEventListener('change', (e) => {
    let day = new Date(e.target.value);

    if (end_date.value < start_date.value) {
        day.setDate(day.getDate() + 1);
        end_date.value = day.toISOString().split('T')[0];
}});

end_date.addEventListener('change', (e) => {
    let day = new Date(e.target.value);

    if (end_date.value < start_date.value){
        day.setDate(day.getDate() - 1);
    start_date.value= day.toISOString().split("T")[0]; 
    }
    
});


const bookingCalc = () => {
    let diffTime = Math.abs( new Date(end_date.value) - new Date(start_date.value));
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    total.textContent = diffDays * nightPrice.textContent;
};

start_date.addEventListener('change', bookingCalc);
end_date.addEventListener('change', bookingCalc);

bookingCalc();