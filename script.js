async function getJoke() {
    const jokeContainer = document.getElementById('joke-text');
    const jokeButton = document.getElementById('getJokeBtn');

    jokeButton.disabled = true;

    try {
        var limit = 1;
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/dadjokes',
            headers: {
                'X-Api-Key': '4JcucexNo2JeuLbUiGo1JU7o4QNxnxIPFnT4Pe9p' 
            },
            data: {
                limit: limit
            },
            contentType: 'application/json',
            success: function(result) {

                if (result && Array.isArray(result) && result.length > 0) {
                    jokeContainer.innerHTML = result.map(joke => `<p>${joke.joke}</p>`).join('');
                } else {
                    jokeContainer.textContent = 'No jokes found!';
                }
            },
            error: function ajaxError(jqXHR) {
                jokeContainer.textContent = 'Oops! Something went wrong. Please try again.';
            },
            complete: function() {
                jokeButton.disabled = false;
            }
        });

    } catch (error) {
        jokeContainer.textContent = 'Oops! Something went wrong. Please try again.';
        jokeButton.disabled = false;
    }
}
