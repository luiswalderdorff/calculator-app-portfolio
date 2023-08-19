<template>
  <div class="app" :class="theme">
    <div class="container">
      <div class="calculator">
        <div class="header">
          <h1>calc</h1>
          <div class="theme-switch">
            <p>THEME</p>
            <div>
              <div class="theme-labels">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <div class="toggle-input" @click="toggleTheme">
                <div class="toggle-ball"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="display">{{ display }}</div>
        <div class="buttons">
          <div class="small-buttons">
            <button @click="append(7)">7</button>
            <button @click="append(8)">8</button>
            <button @click="append(9)">9</button>
            <button class="del" @click="deleteLast">DEL</button>
            <button @click="append(4)">4</button>
            <button @click="append(5)">5</button>
            <button @click="append(6)">6</button>
            <button @click="append('+')">+</button>
            <button @click="append(1)">1</button>
            <button @click="append(2)">2</button>
            <button @click="append(3)">3</button>
            <button @click="append('-')">-</button>
            <button @click="append(',')">,</button>
            <button @click="append(0)">0</button>
            <button @click="append('/')">/</button>
            <button @click="append('*')">x</button>
          </div>
          <div class="large-buttons">
            <button class="reset" @click="clear()">RESET</button>
            <button class="equals" @click="calculate()">=</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      display: "",
      theme: localStorage.getItem("theme") || "theme-one",
      newInput: false,
    };
  },
  methods: {
    append(value: string | number) {
      if (this.newInput) {
        this.display = "";
        this.newInput = false;
      }
      this.display += value;
    },
    deleteLast() {
      this.display = this.display.slice(0, -1);
    },
    calculate() {
      try {
        this.display = eval(this.display);
      } catch {
        this.display = "Error";
      }
      this.newInput = true;
    },
    clear() {
      this.display = "";
    },
    toggleTheme() {
      const themes = ["theme-one", "theme-two", "theme-three"];
      const index = themes.indexOf(this.theme);
      this.theme = themes[(index + 1) % themes.length];
      localStorage.setItem("theme", this.theme);
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

:root {
  --container-width: 327px;
  @media only screen and (min-width: 768px) {
    --container-width: 540px;
  }
}
@font-face {
  font-family: "League Spartan";
  src: url("~@/assets/fonts/LeagueSpartan-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
body {
  margin: 0;
}
.app {
  min-height: 100vh;
  background-color: #3a4663;
  &.theme-two {
    background: #e6e6e6;
  }
  &.theme-three {
    background: #17062a;
  }
}

#app {
  font-family: "League Spartan", sans-serif;
  font-weight: bold;
}

button {
  font-weight: bold;
}

button {
  border-radius: 5px;
  border: none;
  height: 60px;
}

.container {
  width: var(--container-width);
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 32px 0;
  transition: all 0.3s;
  h1 {
    margin: 0;
  }

  .theme-two & {
    color: #36362c;
  }

  .theme-three & {
    color: #ffe53d;
  }
}

.display {
  height: 88px;
  width: 100%;
  border-radius: 10px;
  background: #181f33;
  color: white;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 24px;
  box-sizing: border-box;
  margin-bottom: 24px;
  transition: all 0.3s;

  .theme-two & {
    background: #eee;
    color: #36362c;
  }
  .theme-three & {
    background: #1e0936;
    color: #ffe53d;
  }
}

.buttons {
  padding: 24px;

  border-radius: 10px;
  background: #242d44;
  transition: all 0.3s;
  .theme-two & {
    background: #d2cdcd;
  }
  .theme-three & {
    background: #1e0936;
  }
}

.small-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;

  button {
    height: 60px;
    width: 60px;
    margin: auto;
    border-radius: 5px;
    background: #eae3dc;
    box-shadow: 0px -4px 0px 0px #b3a497 inset;
    color: #434a59;
    text-align: center;
    font-size: 32px;
    border: none;
    transition: all 0.3s;

    @media only screen and (min-width: 768px) {
      width: 101px;
    }

    .theme-two & {
      background: #e5e4e1;
      box-shadow: 0px -4px 0px 0px #a79e91 inset;
      color: #36362c;
    }

    .theme-three & {
      background: #331c4d;
      box-shadow: 0px -4px 0px 0px #881c9e inset;
      color: #ffe53d;
    }
  }
}

button.del,
button.reset {
  color: white;
  font-size: 20px;
  background: #647198;
  box-shadow: 0px -4px 0px 0px #414e73 inset;
  transition: all 0.3s;
  .theme-two & {
    background: #d2cdcd;
    background: #378187;
    box-shadow: 0px -4px 0px 0px #1b6066 inset;
    color: #fff;
  }
  .theme-three & {
    background: #56077c;
    box-shadow: 0px -4px 0px 0px #be15f4 inset;
    color: white;
  }
}
.equals {
  color: white;
  background: #d03f2f;
  box-shadow: 0px -4px 0px 0px #93261a inset;
  transition: all 0.3s;

  .theme-two & {
    background: #c85402;
    box-shadow: 0px -4px 0px 0px #873901 inset;
  }
  .theme-three & {
    color: #1a2327;

    background: #00ded0;
    box-shadow: 0px -4px 0px 0px #6cf9f1 inset;
  }
}

.large-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
  margin-top: 13px;
  button {
    width: 100%;
    border-radius: 5px;
    font-size: 20px;
    border: none;
    height: 60px;
  }
}

.theme-switch {
  display: flex;
  align-items: center;

  p {
    margin: 0px 26px -18px 0;
    font-size: 12px;
    letter-spacing: 1px;
  }

  .toggle-input {
    width: 71px;
    height: 26px;
    background: #242d44;
    border-radius: 13px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s;

    .theme-two & {
      background: #d2cdcd;
    }

    .theme-three {
      background: #1e0936;
    }
  }

  .toggle-ball {
    position: absolute;
    top: 50%;
    width: 16px;
    height: 16px;
    background: #d03f2f;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: left 0.3s, background 0.2s;
    left: 5px;
    transition: all 0.3s;

    .theme-two & {
      background: #c85402;
      left: 28px;
    }

    .theme-three & {
      background: #00ded0;
      left: 50px;
    }
  }

  .theme-labels {
    display: flex;
    justify-content: space-between;
    width: 51px;
    margin: auto;
    margin-bottom: 5px;

    span {
      font-size: 14px;
    }
  }
}
</style>
