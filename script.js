// Função para buscar as previsões do tempo
async function getWeather() {
    const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}';
    const cidadeInput = document.getElementById('cidade-input').value; 

    if (!cidadeInput) {
        alert('Limeira');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeInput}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert('Cidade não encontrada. Tente novamente.');
            return;
        }

        // Atualiza os dados da página com a resposta da API
        document.getElementById('cidade').textContent = data.name;
        document.getElementById('descricao').textContent = data.weather[0].description;
        document.getElementById('temperatura').textContent = `Temperatura: ${data.main.temp}°C`;
        document.getElementById('umidade').textContent = `Umidade: ${data.main.humidity}%`;
        document.getElementById('icone-clima').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    } catch (error) {
        console.error('Erro ao obter dados do clima:', error);
    }
}
