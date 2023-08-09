import { mount } from "@vue/test-utils";
import ValoraApp from "@/components/ValoraApp.vue";



describe('Valora', () => {
    it('el componente existe', () => {
      const wrapper = mount(<ValoraApp />)
      expect(wrapper.exists()).toBe(true)
    });
    it('debería renderizar dos botones', () => {
      const wrapper = mount(<ValoraApp />)
      const botones = wrapper.findAll('button')
      expect(botones).toHaveLength(2)
    });
    it('tiene clases', () => {
      const wrapper = mount(<ValoraApp />)
      const clasesEsperadas =['valoracion']
      const clasesActuales = wrapper.classes()
      expect(clasesActuales).toEqual(expect.arrayContaining(clasesEsperadas))
    })
    
})