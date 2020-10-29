
       
       function register(e){
            e.preventDefault();
            console.log('form Submitted');
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var password= document.getElementById('password').value;
            var password2 = document.getElementById('password2').value;

            var msg = document.getElementById('root');
            var msg1 = document.getElementById('root1');            

            if (name == '' || email == '' || password == '' || password2 == '' ) {
               //msg.className ="alert-danger";
                msg.innerHTML = '<h3 class="alert-danger"> Please Fill all Fields </h3>';
            } else {
                if(password != password2){
                     //msg.className ="alert-danger";
                msg.innerHTML = '<h3 class="alert-danger"> password do not match </h3>';
                } else {
                    //msg.className ="alert-success";
                msg.innerHTML = 'welcome : ' + name + ' your email is ' + email;
                }
           }

           if (name == '' && email == '' && password == '' && password2 == '' ) {
            //msg.className ="alert-danger";
            msg1.innerHTML = 'fill all the necessary fields correctly';
         } else {
             if(password != password2){
                  //msg.className ="alert-danger";
                  msg1.innerHTML = 'password do not match';
                 
             } else {
                 //msg.className ="alert-success";
                 msg1.innerHTML = '<h3 class="alert-success"> Your Form has been Finally Submitted</h3>';
             }
        }

        //    if (name == '' && email == '' && password == '' && password2 == '' ) {
        //     //msg.className ="alert-danger";
        //      msg1.innerHTML = 'fill all the necessary fields';
        //  } else {
        //     msg1.innerHTML = '<h3 class="alert-success"> Your Form has been Finally Submitted</h3>';
        //  }
        }
            document.getElementById('regForm').addEventListener('submit', register, false);

            