import { sendMessage } from "../main";

describe ('main function', () => {

    test('should be what goes in', () => {
        
        //assign
        const theMessage: string = 'hello';
        let outcome: string = '';

        //act
        outcome = sendMessage(theMessage);

        //assert
        expect(outcome).toBe('hello');

    });
});