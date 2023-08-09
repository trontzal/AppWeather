import { mount } from '@vue/test-utils';
import FooterComp from '@/components/FooterComp';

describe('FooterComp', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = mount(FooterComp);
    await wrapper.vm.$nextTick();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('se renderiza correctamente y contiene elementos', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.info').exists()).toBe(true);
    expect(wrapper.find('.datos').exists()).toBe(true);
    expect(wrapper.find('.copyright').exists()).toBe(true);
  });

  it('tiene tres elementos de etiqueta p', () => {
    const pTags = wrapper.findAll('p');
    expect(pTags).toHaveLength(3);
  });

  it('muestra correctamente los textos', () => {
    expect(wrapper.find('.info').text()).toBe('Informacion');
    expect(wrapper.find('.datos').text()).toBe('Datos');
    expect(wrapper.find('.copyright').text()).toBe('Copyright');
  });
});
