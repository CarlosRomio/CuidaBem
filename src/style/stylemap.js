import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    position: 'absolute',
    top: 60, // Ajuste para 30px mais para baixo
    width: width - 40,
    height: 54,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  searchInput: {
    flex: 1,
    height: 47,
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: 'System',
  },
  pharmacyInfo: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    height: 200,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  pharmacyName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});