const togglePassword = document
            .querySelector('#togglePassword');
        const password = document.querySelector('#password');
        togglePassword.addEventListener('click', () => {
        
            const type = password
                .getAttribute('type') === 'password' ?
                'text' : 'password';
            password.setAttribute('type', type);
          
            this.classList.toggle('bi-eye');
        });
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit' , function(event){
        event.preventDefault () ;
        const phoneNumber = document.getElementById('phone_number').value ;
        const password = document.getElementById('password').value ;
        const formData = new FormData();
        formData.append('phone_number', phoneNumber );
        formData.append('password', password)
        fetch('https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin/',{
            method: 'POST',
            body:formData,
        }).then(res=>res.json()) .then(res=>{
            console.log(res);
            if(res.success){
                localStorage.setItem('access_token',res.data.tokens.accessToken.token)
                document.location.href="dokument.html"
                alert("Ajoyib")
            }
            else{
                alert("login yoki parol notug'ri")
            }
        }).catch(err=>{
            console.log(err);
        })
        })