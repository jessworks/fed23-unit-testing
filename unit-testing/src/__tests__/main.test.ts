import { sendMessage } from "../main";

describe ('main function', () => {

    test('should be what goes in', () => {

        //assign
        const theMessage = 'hello';
        

        //act
        let outcome = sendMessage(theMessage);

        //assert
        expect(outcome).toBe('hello');

    });
});