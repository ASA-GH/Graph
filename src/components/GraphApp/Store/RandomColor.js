const ColorData = [
  '#E32636', 
  '#FF2400', 
  '#E52B50', 
  '#FF033E', 
  '#44944A', 
  '#6A5ACD', 
  '#003153', 
  '#77DDE7', 
  '#FFCF40', 
  '#8CCB5E', 
  '#DD80CC', 
  '#B00000', 
  '#FFB02E', 
  '#3E5F8A', 
  '#A7FC00', 
  '#30BA8F', 
  '#FFDB58', 
  '#FD7C6E', 
  '#9ACD32', 
  '#1E90FF'
];
const GetRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
const GetColor = () => {
  return ColorData[GetRandomInt(0, ColorData.length - 1)];
}
export default GetColor;