
export function extractPalette(imageURL) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (!context) {
        reject(new Error('Canvas is not supported.'));
        return;
      }

      canvas.width = 100;
      canvas.height = 100;

      context.drawImage(img, 0, 0, 100, 100);

      const { data } = context.getImageData(0, 0, 100, 100);
      const colourCounts = new Map();

      for (let i = 0; i < data.length; i += 16) {
        const alpha = data[i + 3];

        if (alpha < 128) continue;

        const r = Math.round(data[i] / 32) * 32;
        const g = Math.round(data[i + 1] / 32) * 32;
        const b = Math.round(data[i + 2] / 32) * 32;

        const colour = [r, g, b]
          .map(value => Math.min(value, 255));

        const key = colour.join(',');

        colourCounts.set(
          key,
          (colourCounts.get(key) || 0) + 1
        );
      }

      const palette = [...colourCounts.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([key]) => {
          const rgb = key.split(',').map(Number);

          return '#' + rgb
            .map(value => value.toString(16).padStart(2, '0'))
            .join('');
        });

      resolve(palette);
    };

    img.onerror = () => {
      reject(new Error('Unable to read the image.'));
    };

    img.src = imageURL;
  });
}
