
function getAccessToken() {
    return location.hash.slice(1).replace(/#/gi, '&').split('&')[0].split('access_token=').slice(1).join();
}

$('.body__token').text(getAccessToken());
