let data_flag = false;
let name_;
let mobile;
let board_no;

let type_of_board = {

    '1':'English_board (6x12)',
    '2':'English_board (6x12)',
    '3':'American_board (5x9)',
    '4':'American_board (5x9)',
    '5':'Pool_table (4x8)',
}

let prices_ = {
    'English_board (6x12)':'300/-',
    'American_board (5x9)':'250/-',
    'Pool_table (4x8)':'200/-'
}
/* function to check thge mobile number is valid or not */
function validatePhoneNumber(phoneNumber) {

    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    if(re.test(phoneNumber)){
/* it returns true but iam returning false to avoid the bug in below */
        return false
    }else{
        return true
    }
  }


document.getElementById('submit').onclick = function () {
    name_ = document.getElementById('p_name').value;
    mobile = document.getElementById('p_phn').value;
    board_no = document.getElementById('b_no').value;


    if (validatePhoneNumber(mobile)){
        document.getElementById("error_gen").innerHTML = "Error in phn number" ;
        document.getElementById("error_gen").style.marginLeft = '-14px' ;
        document.getElementById("error_gen").style.color = 'red' ;
        console.log(data_flag);
        
        /* reseting the lable names in details block */
        document.getElementById('idpn').innerHTML ="Player name";
        document.getElementById('idm').innerHTML = "Mobile";
        document.getElementById('idbn').innerHTML = "Board number";
        document.getElementById('idbt').innerHTML = "Board type";
        document.getElementById('idp').innerHTML = "Price";

    } else {
        data_flag = true ;

        document.getElementById("error_gen").innerHTML = "Acknowledged"
        document.getElementById("error_gen").style.marginLeft = '1px' ;
        document.getElementById("error_gen").style.color = 'green' ;
        
        /* clearing the values in input area */
        document.getElementById('p_name').value = '';
        document.getElementById('p_phn').value = '';

        /* setting or filling the details block */
        document.getElementById('idpn').innerHTML = name_;
        document.getElementById('idm').innerHTML = mobile;
        document.getElementById('idbn').innerHTML = board_no;
        document.getElementById('idbt').innerHTML = type_of_board[board_no];
        document.getElementById('idp').innerHTML = prices_[type_of_board[board_no]];

        console.log(data_flag);
        console.log(name_);
        console.log(mobile);
        console.log(board_no);
        console.log('---------------------');
    }

    data_flag = false ;
}

//-------------------------------------------------------------------------------------//
//----------------------------------------TIMER----------------------------------------//
//-------------------------------------------------------------------------------------//

function startOneHourTimer(time_stamp_timer, uftn, fbn) {//uftn = updating form table number based on timer
                                                         //fbn = form board number (selection in html)
                                                         
    const oneHourInMillis = 0.5 * 60 * 1000; // 60 minutes * 60 seconds * 1000 milliseconds

    // Get the current time
    const startTime = new Date().getTime();

    // Calculate the end time
    const endTime = startTime + oneHourInMillis;

    // Update the timer every second
    const timerInterval = setInterval(function() {
        // Get the current time
        const currentTime = new Date().getTime();

        // Calculate the remaining time
        const remainingTime = endTime - currentTime;

        // If the timer has reached zero, clear the interval
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById(time_stamp_timer).textContent = "Time Up!";

            document.getElementById(uftn).innerHTML = '   '+fbn+'   ';//it updates the table number selection in html based on timer,
            //provides is that table is available or not, if not the number will be blank while selecting...
             
            //the blocks are just an empty character => alt+255

            document.getElementById(uftn).value = fbn;

             
        } else {
            // Convert remaining time to hours, minutes, and seconds
            const hours = Math.floor(remainingTime / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            // Display the remaining time
            document.getElementById(time_stamp_timer).textContent = `${minutes}:${seconds}`;
        }
    }, 1000); // Update every second
}


//-------function for timer-------//
function set_timer_for_table(table_id_html,uftn,fbn){//uftn = updating form table number based on timer
                                                     //fbn = form board number (selection in html)
    let timer_onclick_flag = false;

    document.getElementById(table_id_html).onclick = function(){

        let time_stamp_timer = table_id_html;
        
        if(!timer_onclick_flag){

            startOneHourTimer(time_stamp_timer,uftn,fbn);
            timer_onclick_flag = true;
            document.getElementById(uftn).innerHTML = ' ';
            document.getElementById(uftn).value = 'Table in Use';

        }else if(document.getElementById(time_stamp_timer).textContent == "Time Up!"){

            timer_onclick_flag = false;
            
        }   
    }
}

set_timer_for_table("time_stamp_r1", "fbn1", '1')
set_timer_for_table("time_stamp_r2", "fbn2", '2')
set_timer_for_table("time_stamp_r3", "fbn3", '3')
set_timer_for_table("time_stamp_r4", "fbn4", '4')
set_timer_for_table("time_stamp_r5", "fbn5", '5')

