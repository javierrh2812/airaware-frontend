// dynamic style circle colors
export const styleColor = (feature) => {
  const { condition } = feature.properties;
  let color = '#3740CA';
  switch (condition) {
    case 'good':
      color = '#8BDB81';
      break;
    case 'moderate':
      color = '#FFE162';
      break;
    case 'unhealthy':
      color = '#FF6464';
      break;
    case 'very unhealthy':
      color = '#a070b6';
      break;
    case 'dangerous':
      color = '#a06a7b';
      break;
    default:
      break;
  }
  return color;
};
