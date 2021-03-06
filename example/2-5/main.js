(function () {
    axios({
        method: "get",
        url: "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=5",
        responseType: 'json',
    }).then(function (response) {
        var activitys = response.data;
        var html = ""
        activitys.forEach(function(activity) {
            html += `<tr>
                        <td>${activity.title}</td>
                        <td><img src=${activity.imageUrl}></td>
                        <td><a href=${activity.webSales}>Link</a></td>
                        <td>${activity.startDate}</td>
                        <td>${activity.endDate}</td>
                    </tr>`;
        });
        document.getElementById('content').innerHTML = html;
    });
})();
