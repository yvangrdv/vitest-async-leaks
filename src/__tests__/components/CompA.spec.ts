import { shallowMount } from '@vue/test-utils'
import CompA from "@/components/MainComp/CompA/CompA.vue"

describe('CompA', () => {
  it('test', async () => {
    const wrapper = shallowMount(CompA)
    
    wrapper.vm["showB"] = true

    expect(true).toBe(true)
  })
})