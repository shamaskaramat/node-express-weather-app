const  submitBtn = document.getElementById('submitBtn') 
const city_name = document.getElementById('city_name')
const cityName = document.getElementById('cityName')
const temp_status = document.getElementById('temp_status')
const temp_real = document.getElementById('temp_real')
const datahide =  document.querySelector('.middle_layer')
const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal= cityName.value;
    if(cityVal==="")
    {
        city_Name.innerText =`Please Enter The City Name First to attain results`
        datahide.classList.add('data_hide')
    }
    else{
        try{
            let  URL =`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=90b32bf00cced14c21555637acaf4d36`; 
            const res = await fetch(URL);
            const data = await res.json();
            const arrData = [data];
            // temp_status.innerText= arrData[0].weather[0].main;
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real.innerText= arrData[0].main.temp;
            const temp_Mood=arrData[0].weather[0].main;
            if(temp_Mood=="Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if(temp_Mood=="Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(temp_Mood=="Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68';></i>";

            }
            datahide.classList.remove('data_hide')
        }catch{
            city_name.innerText="Please Enter The City Name Correctly"
            datahide.classList.add('data_hide')
        }
    }
}
submitBtn.addEventListener('click', getInfo);