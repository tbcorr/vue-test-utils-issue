import { shallowMount } from '@vue/test-utils';
import App from '@/App';

describe('App', () => {
  describe('when pressing the home key', () => {
    let wrapper; 

    beforeAll(() => {
      wrapper = shallowMount(App, {
        sync: false
      });

      wrapper.find('.keys').trigger('keydown.home');
    });

    it('should update homePressed', () => {
      expect(wrapper.vm.homePressed).toBe(true);
    });

    it('should not update endPressed', () => {
      expect(wrapper.vm.endPressed).toBe(false);
    });

    it('should not update upPressed', () => {
      expect(wrapper.vm.upPressed).toBe(false);
    });

    it('should not update downPressed', () => {
      expect(wrapper.vm.downPressed).toBe(false);
    });

    it('should not update pageUpPressed', () => {
      expect(wrapper.vm.pageUpPressed).toBe(false);
    });

    it('should not update pageDownPressed', () => {
      expect(wrapper.vm.pageUpPressed).toBe(false);
    });
  });

  describe('when pressing the end key', () => {
    let wrapper; 

    beforeAll(() => {
      wrapper = shallowMount(App);

      wrapper.find('.keys').trigger('keydown.end');
    });

    it('should not update homePressed', () => {
      expect(wrapper.vm.homePressed).toBe(false);
    });

    it('should update endPressed', () => {
      expect(wrapper.vm.endPressed).toBe(true);
    });

    it('should not update upPressed', () => {
      expect(wrapper.vm.upPressed).toBe(false);
    });

    it('should not update downPressed', () => {
      expect(wrapper.vm.downPressed).toBe(false);
    });

    it('should not update pageUpPressed', () => {
      expect(wrapper.vm.pageUpPressed).toBe(false);
    });

    it('should not update pageDownPressed', () => {
      expect(wrapper.vm.pageUpPressed).toBe(false);
    });
  });

  describe('when pressing the up key', () => {
    let wrapper; 

    beforeAll(() => {
      wrapper = shallowMount(App);

      wrapper.find('.keys').trigger('keydown.up');
    });

    it('should not update homePressed', () => {
      expect(wrapper.vm.homePressed).toBe(false);
    });

    it('should not update endPressed', () => {
      expect(wrapper.vm.endPressed).toBe(false);
    });

    it('should update upPressed', () => {
      expect(wrapper.vm.upPressed).toBe(true);
    });

    it('should not update downPressed', () => {
      expect(wrapper.vm.downPressed).toBe(false);
    });

    it('should not update pageUpPressed', () => {
      expect(wrapper.vm.pageUpPressed).toBe(false);
    });

    it('should not update pageDownPressed', () => {
      expect(wrapper.vm.pageUpPressed).toBe(false);
    });
  });

  describe('when pressing the down key', () => {
    let wrapper; 

    beforeAll(() => {
      wrapper = shallowMount(App);

      wrapper.find('.keys').trigger('keydown.down');
    });

    it('should not update homePressed', () => {
      expect(wrapper.vm.homePressed).toBe(false);
    });

    it('should not update endPressed', () => {
      expect(wrapper.vm.endPressed).toBe(false);
    });

    it('should not update upPressed', () => {
      expect(wrapper.vm.upPressed).toBe(false);
    });

    it('should update downPressed', () => {
      expect(wrapper.vm.downPressed).toBe(true);
    });

    it('should not update pageUpPressed', () => {
      expect(wrapper.vm.pageUpPressed).toBe(false);
    });

    it('should not update pageDownPressed', () => {
      expect(wrapper.vm.pageUpPressed).toBe(false);
    });
  });

  describe('when pressing the page up key', () => {
    let wrapper; 

    beforeAll(() => {
      wrapper = shallowMount(App);

      wrapper.find('.keys').trigger('keydown', {
        keyCode: 33
      });
    });

    it('should not update homePressed', () => {
      expect(wrapper.vm.homePressed).toBe(false);
    });

    it('should not update endPressed', () => {
      expect(wrapper.vm.endPressed).toBe(false);
    });

    it('should not update upPressed', () => {
      expect(wrapper.vm.upPressed).toBe(false);
    });

    it('should not update downPressed', () => {
      expect(wrapper.vm.downPressed).toBe(false);
    });

    it('should update pageUpPressed', () => {
      expect(wrapper.vm.pageUpPressed).toBe(true);
    });

    it('should not update pageDownPressed', () => {
      expect(wrapper.vm.pageUpPressed).toBe(false);
    });
  });

  describe('when pressing the page down key', () => {
    let wrapper; 

    beforeAll(() => {
      wrapper = shallowMount(App);

      wrapper.find('.keys').trigger('keydown', {
        keyCode: 34
      });
    });

    it('should not update homePressed', () => {
      expect(wrapper.vm.homePressed).toBe(false);
    });

    it('should not update endPressed', () => {
      expect(wrapper.vm.endPressed).toBe(false);
    });

    it('should not update upPressed', () => {
      expect(wrapper.vm.upPressed).toBe(false);
    });

    it('should not update downPressed', () => {
      expect(wrapper.vm.downPressed).toBe(false);
    });

    it('should not update pageUpPressed', () => {
      expect(wrapper.vm.pageUpPressed).toBe(false);
    });

    it('should update pageDownPressed', () => {
      expect(wrapper.vm.pageUpPressed).toBe(true);
    });
  });
});