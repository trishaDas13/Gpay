let button = document.querySelector('button');
let input = document.querySelectorAll('input');
let label = document.querySelectorAll('label');
let form = document.querySelector('form');
let done = document.querySelector('payment_done');



button.addEventListener('click', function(e){
    e.preventDefault();

    // //* handelling input fields
    // if(input[0].value == "" || input[1].value == "" || input[3].value == ""){
    //     alert("Please enter all the required fields");
    //     return;
    // }
    // //* Check the phone number
    // if(input[1].value.keyCode >= 48 && input[1].value.keyCode <= 57){
    //     alert("Please enter a valid phone number");
    //     return;
    // }
    // else if(input[1].value.length < 10 || input[1].value.length > 10){
    //     alert("Phone number must be at least 10 characters");
    //     return;
    // }
    
    //todo ------- processing bar -------
    //* hide all the input fields
    button.style.display = 'none';
    input.forEach(function(element){
        element.style.display = 'none'
    });
    label.forEach(function(element){
        element.style.display = 'none'
    });
    //* Showing the progress bar
    document.getElementById('processing').style.display = 'inline-block';
    document.getElementById('progress').style.display = 'inline-block';
    document.getElementById('color').style.display = 'inline-block';
    form.style.background = 'transparent';
    form.style.display = 'flex';
    form.style.justifyContent = 'center';
    form.style.alignItems = 'center';

    //! >>>>>> Promise part <<<<<<<
    let myPromise = new Promise((resolve, reject) => {
        if(input[3].value <= 20000 && input[3].value >= 0){
            setTimeout(() => {
                resolve();
            }, (Math.floor(Math.random() * 5000) + 1000));
        }
        else{
            setTimeout(() => {
                reject();
            }, (Math.floor(Math.random() * 5000) + 1000));
        }
    });
    //! >>>>>> Resolve part <<<<<<<
    myPromise.then(() => {
        document.getElementById('processing').style.display = 'none';
        document.getElementById('progress').style.display = 'none';
        document.getElementById('color').style.display = 'none';
    
        let payment = document.createElement('div');
        payment.classList.add('.container');
        payment.innerHTML = `
        
        <div class="above">
            <svg width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#3b82f6" d="m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12m-13 5l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8Z"/>
            </svg>
            <p class="rs">₹ ${input[3].value}.00</p>
            <p class="name">Paid to ${input[0].value}</p>
            <p class="num">${input[1].value}</p>
        </div>
        <div class="down">
            <p class="date">${createDate()}</p>
            <p class="ID">UPI transaction ID : ${Math.floor(Math.random() * 50000000000000)}</p>
        </div> 
    
        `;
        done.appendChild(payment);
    });













    //! >>>>>> Reject part <<<<<<<
    myPromise.catch(() => {
        console.log("reject");
    });
    
});

//todo ------- To create the date -------
function createDate(){
    let dates = new Date();
    let monthearr = ["January", "February", "March", "April", "May", "June", ",July", "August", "September", "October", "November", "December"];
  
    let month = monthearr[dates.getMonth()];
    let date = dates.getDate();
    let year = dates.getFullYear();
    let hour = dates.getHours();
    let minute = dates.getMinutes();
    let finalDate = `${month} ${date}, ${year} ${hour}:${minute}`;
    return finalDate;
}
