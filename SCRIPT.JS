function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.95635, lng: 78.64589 },
    zoom: 10,
    styles: [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{ color: "#444444" }],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [{ color: "#f2f2f2" }],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [{ saturation: -100 }, { lightness: 45 }],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{ visibility: "simplified" }],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [{ color: "#46bcec" }, { visibility: "on" }],
      },
    ],
  });

  // Создаем маркер на карте
  var marker = new google.maps.Marker({
    // Определяем позицию маркера
    position: { lat: 42.95635, lng: 78.64589 },

    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,

    // Пишем название маркера - появится если навести на него курсор и немного подождать
    title: "Наш маркер: Большой театр",

    // Укажем свою иконку для маркера
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPsSURBVHgBtVfdThNBFD5ndpcbra5REy/LE1ieQIxo4pX0CWyfQIho4hXlykRNgCegPAHlykRJKE9A34ByZwKGNXDV7uzxnN2ddrq0y7bKl5DO7Mw555vzNwMefHu4DKg2AchHwFav1994/Snowi3g+2e/7HneDiBVADCINFQxWXjCC+Exf/QBodvv9Z8LiZ9fHy0qhW+IIBGIaP/Vx7PmJAN7Dd+/e8etIeJTnpYRoaM17LJMJzY+5x0CQTmx4bCNX100wmyswYLr6XSbxxdE1LhmhYWFuSi1P//48riiHNiLDWRFEFkPlfkgNZlHEdTNQXDoHvGCPkmnAf/5MAlMwlH9heerQTBwrTldATCBBXMANWHP0DhSwK7sjqyyoTB0a2bqON5i1ngsw7LjlDP5CzMeEHDdsDxm7/blZTj/4v3ZfL/vzLPlYGggjnOiREUVm7DsFZml9+cPOIwbWaU68h5cIzAGzaW1s5VqI3GzJExEuG+t/zGDiNTAYxSpI9lr5i8/nDf4p20rRiT/RgLMfNeeS4YrBc8GRiMYJCECDceKnh5u+n5G1wZMgB2CkaxWGMYJKQl28O3xTqnkngzizPG1y5Flm2DyhPewi49FRkgnBMKRXLBtDQgkGU0tMw/13IL8Sj/g0x6x4k6SjNSSGrYVimzyjVrxHqKueNCED8CrWNubpnqSs1gQ14XaO+SPlWypzQrxQqnkHafeCy6v+vNDYpkciCJvPTYuSF3JDaZm75HumI2xQEIlzSi71zIu8O+VvHV7D9oKuE+fwHh02KX73JbvE1At0rT66uPvpr0hvlNA7XAIJIxB0r5hcZwyhH75xVpwKmN3ZAGhzv2+K2XCpbUcZ33CvsJ1X2GlsbjWbjurNIp0Vynlm3Y7VEp86eCu40DH6E77wGmiLQfpJcU3JS6nnwIpKa7trXH7JVxK0WZ8qcWg1uVVWLdjnoULOUgbSpVL6hASd4riDuRiaHxp7bwKN0BBAXBrrZs2bN2Y15UpeDuUcVehAAoRyLThsVVg1tLfpt2O85AbAqkM13XLMubTUZKEAL3e3CKX2EhcuULKZp2TOZASlDERBtm3Q2ECbLxmXG6UCxyH9rL5a6/zeIXlVtIxh29y3qh8AuEWZN8C04BltXbaeVtyCUgblufXTCTi+ofqTblwYxJK/MxFA4WBfGG5C3mxL0xAEL9eceQxkgvuivtFq6AQgdtEYQK9ntOOCHYLbG1q7bWhIBCmBN96fA+odxOW5R1ZhykwdQgcRzcmrXHL3oApMTUBKU0cX5adoon3TwQEWt6IGXDLPYUZ8N+qgB8aFzADZvNA6DTs/5IEs8Rf8Bf9uu7i2wbj/AAAAABJRU5ErkJggg==",
  });

  // Создаем наполнение для информационного окна
  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Жаланашское ОХ</h1>' +
    '<div id="bodyContent">' +
    "<p>Территория охотничьего хозяйства Жаланашского расположено на северном склоне в свосточной части хребта Кунгей Алатау. Южная граница охотхозяйства проходит по водоразделу Кунгей Алатау и боковому отрогу, разделяющему долины Орта мерке и Кенсу.</p>" +
    '<p><b>Веб-сайт:</b> <a href="https://hunters.it-ticket.kz/household/41" target="_blank">https://hunters.it-ticket.kz</a>' +
    "</p>" +
    "</div>" +
    "</div>";

  // Создаем информационное окно
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400,
  });
  // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });

  var myCoordinates = [
    new google.maps.LatLng(42.900232, 78.509439),
    new google.maps.LatLng(42.896208, 78.513558),
    new google.maps.LatLng(42.896208, 78.519052),
    new google.maps.LatLng(42.894196, 78.524545),
    new google.maps.LatLng(42.890171, 78.531411),
    new google.maps.LatLng(42.887153, 78.536904),
    new google.maps.LatLng(42.879102, 78.545144),
    new google.maps.LatLng(42.873064, 78.549264),
    new google.maps.LatLng(42.873064, 78.557504),
    new google.maps.LatLng(42.872058, 78.567117),
    new google.maps.LatLng(42.868032, 78.58085),
    new google.maps.LatLng(42.861992, 78.587716),
    new google.maps.LatLng(42.876083, 78.613809),
    new google.maps.LatLng(42.882121, 78.642648),
    new google.maps.LatLng(42.895202, 78.653634),
    new google.maps.LatLng(42.904256, 78.67698),
    new google.maps.LatLng(42.89822, 78.731912),
    new google.maps.LatLng(42.910768, 78.801367),
    new google.maps.LatLng(42.932892, 78.817846),
    new google.maps.LatLng(42.954003, 78.801367),
    new google.maps.LatLng(42.991181, 78.7945),
    new google.maps.LatLng(43.003234, 78.787634),
    new google.maps.LatLng(43.014281, 78.762915),
    new google.maps.LatLng(43.032352, 78.754675),
    new google.maps.LatLng(43.035364, 78.739569),
    new google.maps.LatLng(43.026329, 78.716223),
    new google.maps.LatLng(43.024321, 78.692877),
    new google.maps.LatLng(43.027333, 78.662665),
    new google.maps.LatLng(43.041386, 78.658545),
    new google.maps.LatLng(43.047408, 78.644812),
    new google.maps.LatLng(43.057443, 78.637945),
    new google.maps.LatLng(43.066473, 78.624212),
    new google.maps.LatLng(43.063463, 78.613226),
    new google.maps.LatLng(43.043393, 78.596747),
    new google.maps.LatLng(43.029341, 78.584387),
  ];
  var polyOptions = {
    path: myCoordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.6,
  };
  var it = new google.maps.Polygon(polyOptions);

  map.data.loadGeoJson('https://prostomol4i.github.io/cosule/result.json');

  it.setMap(map);
}
