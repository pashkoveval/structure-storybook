import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import UiInput from '../UiInput.vue';
import { UiInputTypes } from '../enums/Types';

const propsBase = {
  logo: 'UiInput',
  modelValue: 'modelValue',
  type: UiInputTypes.Text,
};

describe('UiInput', () => {
  it('renders logo', () => {
    const wrapper = mount(UiInput, { props: { ...propsBase } });
    expect(wrapper.text()).toContain(propsBase.logo);
  });
});
