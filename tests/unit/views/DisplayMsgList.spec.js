import { mount } from '@vue/test-utils'
import DisplayMsgList from '../../../src/views/DisplayMsgList.vue'
import MessageList from '../../../src/components/MessageList.vue'

describe('DisplayMsgList.spec.js', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(DisplayMsgList)
        wrapper.setData({ message: ['Cat','Dog'] });
    });

    test('is DisplayMsgList component', () => {
        expect(wrapper.is(DisplayMsgList)).toBe(true)
        expect(wrapper.is('.display-message-list')).toBe(true)
    })

    test('message property has array type of data', () => {
        expect(typeof wrapper.vm.message).toBe('object')
    })

    test('has received ["Cat", "Dog"] as the message property', () => {
        expect(wrapper.vm.message).toEqual(["Cat", "Dog"])
    })

    test('has the expected html structure', () => {
        expect(wrapper.element).toMatchSnapshot()
    })

    test('contains a MessageList component', () => {
        expect(wrapper.contains(MessageList)).toBe(true)
        expect(wrapper.contains('.message-list')).toBe(true)
    })

    test('MessageList element exists and not empty', () => {
        expect(wrapper.find(MessageList).exists()).toBe(true)
        expect(wrapper.find(MessageList).isEmpty()).toBe(false)
    })

    test('MessageList has a "messagesProp" property equals to ["Cat", "Dog]', () => {
        expect(wrapper.find(MessageList).vm.messagesProp).toEqual(["Cat", "Dog"])
    })

})