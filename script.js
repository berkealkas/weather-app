const locationInput = document.getElementById("location-input")
const result = document.querySelector('.result')
const api_key = "YOUR_API_KEY"

locationInput.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        const locationName = locationInput.value
        const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${locationName}`
    
        fetch(url)
            .then(res => res.json())
            .then(data => {
                result.innerHTML = `
                    <div class="card w-50 text-center">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-4">
                                    <h5 class="">${data.location.country}</h5>
                                    <h5 class="mt-4">${data.location.name}</h5>
                                    <h5 class="mt-4">${data.location.localtime}</h5> 
                                </div>

                                <div class="col-4 d-flex align-items-center">
                                    <img src="${data.current.condition.icon}" style="width: 55%;">
                                    <div>
                                        <h5 class="flex-wrap">${data.current.condition.text}</h5>
                                        <h5 class="flex-wrap">${data.current.temp_c} °c</h5>                          
                                    </div>
                                </div>
                               
                                <div class="col-4">                    
                                    <h5 class="">Wind: ${data.current.wind_kph} kmph</h5>
                                    <h5 class="mt-4">Precip: ${data.current.precip_mm} mm</h5> 
                                    <h5 class="mt-4">Pressure: ${data.current.pressure_mb} mb</h5> 
                                </div>
                            </div>
                        </div>
                    </div>
                `
            })
            .catch(() => {
                if (locationName.length == 0) {
                    alert("Please Enter a Location")       
                }

                else {
                    alert("Please Enter a Valid Location")
                }
            })
            document.getElementById("location-input").value = ""
    }
})
