import { mount } from '@vue/test-utils'
import LoginView from '@/views/LoginView.vue'

describe('LoginView.vue', () => {
  it('comprueba si hay un campo de usuario', () => {
    const wrapper = mount(LoginView)
    expect(wrapper.find('input[name="login"]').exists()).toBe(true)
  })

  it('comprueba si hay un campo de contraseña', () => {
    const wrapper = mount(LoginView)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
  })

  it('comprueba si hay un botón de envío', () => {
    const wrapper = mount(LoginView)
    expect(wrapper.find('input[type="submit"]').exists()).toBe(true)
  })
})