<template>
  <div class="HamburgerIcon">
    <div class="border__group">
      <span
        class="border__top"
        :class="[isOpen ? 'border__top--true' : 'border__top--false']"
      ></span>
      <span
        class="border__middle"
        :class="{ 'border__middle--true': isOpen }"
      ></span>
      <span
        class="border__bottom"
        :class="[isOpen ? 'border__bottom--true' : 'border__bottom--false']"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HamburgerIcon',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.border__group {
  position: fixed;
  top: 5;
  right: 0;
  width: 50px;
  height: 50px;
}

span {
  display: block;
  height: 2px;
  width: 70%;
  margin: auto;
  position: absolute;
  top: calc((100% - 4px) / 2);
  left: 0;
  right: 0;
  background-color: #fff;
  border-radius: 1px;
}

.border__top--false {
  transform: translateY(-10px);
}

.border__bottom--false {
  transform: translateY(10px);
}

.border__top--true {
  animation: top 0.8s ease-in-out;
  transform: rotate(-45deg);
}

.border__middle--true {
  animation: middle 0.8s ease-in-out;
  opacity: 0;
}

.border__bottom--true {
  animation: bottom 0.8s ease-in-out;
  transform: rotate(45deg);
}

@keyframes top {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(315deg);
  }
}

@keyframes middle {
  from {
    opacity: 1;
  }

  to {
    opacity: ０;
  }
}

@keyframes bottom {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-315deg);
  }
}
</style>
