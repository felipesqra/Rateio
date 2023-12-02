import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
        paddingVertical: 25,
        backgroundColor: '#373B3F', // Define the background color
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#373B3F', // Define a cor de fundo azul
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    participantsButton: {
        backgroundColor: '#FFF', // Cor de fundo branca
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 30,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#1CC29F', // Fundo escuro semi-transparente
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#333', // Cor de fundo escura
        padding: 20,
        borderRadius: 5,
        width: '100%',
    },
    modalTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#FFF', // Cor do texto claro
    },
    modalItem: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        color: '#FFF', // Cor do texto claro
    },
    icon: {
        marginRight: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 60,
        backgroundColor: '#373B3F',
        padding: 10,
        borderRadius: 8,
        borderColor: '#373B3F',
        borderWidth: 1,
        marginBottom: 10,
        color: 'white',
    },
    input: {
        width: '90%',
        height: 45,
        backgroundColor: '#373B3F',
        padding: 10,
        borderRadius: 8,
        borderColor: 'transparent',
        borderWidth: 1,
        color: 'white',
    },
    placeholderText: {
        color: 'white',
    },
    modalButton: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 8,
        width: '90%',
        height: 45,
        alignItems: 'center',
        marginBottom: 30,
    },
    confirmButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1CC29F', // Cor do texto verde
    },
    arrow: {
        position: 'absolute',
        left: 30,
        top: 50
    },
    image: {
        backgroundColor: '#fff',
        width: 200,
        height: 200,
        marginBottom: 8,
        borderRadius: 8,
        borderWidth: 2, // Border width in pixels
        borderColor: '#1CC29F', // Border color
    },
    groupInfo: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "100%",
        marginTop: 25,
        paddingVertical: 18,
        paddingHorizontal: 15,
        gap: 15
    },
    inline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    innerGroup: {
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    textBold: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#333",
    },
    text: {
        fontSize: 16,
        color: "#333",
    },
    copy: {
        margin: 10,
    },
    scrollView: {
        width: '100%',
    },
    scrollContent: {
        // Ensure content fills the entire ScrollView
        minHeight: '100%',
    },
    participantInfo: {
        flexDirection: 'row',
        marginBottom: 10, // Add margin between list items
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    participantStyle: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    participantImage: {
        width: 47,
        height: 47,
        backgroundColor: "#fff",
        borderRadius: 30
    },
    participantName: {
        width: 100,
        fontSize: 14,
        color: "#333",
        marginLeft: 15
    },
    actionButtons: {
        flexDirection: "row",
    },
    button: {
        width: "100%",
        height: 45,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 25,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 16,
        color: "#d73018",
        fontWeight: 'bold'
    },
    buttonAddText: {
        fontSize: 16,
        color: '#1CC29F', // Cor do texto verde
        fontWeight: 'bold'
    },
    markDebtButtonPaid: {
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 6,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    markDebtButtonTextPaid: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    markDebtButtonUnpaid: {
        backgroundColor: 'red',
        borderRadius: 8,
        padding: 6,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    markDebtButtonTextUnpaid: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    removeButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10, // Adjust the margin as needed
    },
});
