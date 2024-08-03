 // Add a marker with a custom SVG icon
 const marker = L.marker([51.505, -0.09], { icon: customSvgIcon }).addTo(map);

 // Bind a popup to the marker
 marker.bindPopup("<b>Custom SVG Icon</b><br>This marker uses an SVG icon from GitHub.");

// Function to add markers and circles
points.forEach(([lat, lng], index) => {
    // Add a marker with a custom icon for the first point
    const marker = L.marker([lat, lng], {
        icon: index === 0 ? customIcon : undefined // Use the custom icon for the first marker
    }).addTo(map);

    // Add a popup to the marker
    marker.bindPopup(`<b>Point ${index + 1}</b><br>I am a ${index === 0 ? 'custom icon' : 'default icon'} marker.`).openPopup();

});


