const textarea = document.querySelector('#feed-textarea > ul');


var url = 'https://www.youtube.com/feeds/videos.xml?playlist_id=PLd6pQFEt4huL-6gDVFpWSS1F2VKFmUt87'

feednami.load(url, function(result) {
    if (result.error) {
        console.log(result.error);
    } else {
        var entries = result.feed.entries

        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i]

            let li = document.createElement('li');


            //add HTML content to list items
            li.innerHTML = `
                <h4>
                    <a href="${entry.link}"> 
                        <img align="center" src="${entry.image.url}" width="300px" />
                        <p>${entry.title}</p>
                    </a>
                </h4>
            `;


            //append HTML content to list 
            textarea.appendChild(li);

        }
    }
})
