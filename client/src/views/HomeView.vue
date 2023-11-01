<script setup></script>

<template>
  <main>
    <div class="top-header">
      <div class="header"></div>
      <div class="sub-header">
        <div class="sub-header-2"></div>
        <div class="sub-header-3"></div>
      </div>
      <div class="header-body">
        <div class="body-left">
          <div class="left-top">
            <div class="body-span"></div>
          </div>
          <div class="left-bottom">
            <div class="left-span"></div>
            <div class="left-span"></div>
            <div class="left-span"></div>
          </div>
        </div>
        <div class="body-right">
          <div class="right-span"></div>
          <div class="right-span"></div>
          <div class="right-span"></div>
        </div>
      </div>
    </div>
    <div class="body-bottom">
      <div class="body-content"></div>
      <div class="body-content-outer"></div>
      <div class="body-content-white"></div>
      <div class="body-content-bottom"></div>
      <div class="body-content-outer-bottom"></div>
    </div>
  </main>
</template>

<style>
.top-header{
  background-color: black;
  padding: 8px;
}

.header {
  background-color: blue;
  width: auto;
  height: 10vh;
}

.sub-header{
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 10px;
}
.sub-header-2{
  background-color: blue;
  height: 10vh;
  width: 110vh;
}
.sub-header-3{
  background-color: blue;
  height: 10vh;
  width: 110vh;
}

.header-body{
  /* background-color: aquamarine; */
  width: auto;
  height: 40vh;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 4vh;
}

.body-left{
  width: 200vh;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
}

.left-top{
  background-color: blue;
  height: 30vh;
  width: 145vh;
  /* padding: 1vh; */
}

.left-bottom{
  /* background: blue; */
  width: 145vh;
  height: 10vh;
  display: flex;
  /* justify-content: center; */
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5vh;

}

.body-span{
  background-color: red;
  /* margin-bottom: 10px; */
  margin: 15px;
  width: auto;
  height: 23vh;
  border: 10px solid black;
}

.left-span{
  background-color: blue;
  width: 45vh;
  height: auto;
}

.body-right{
  background-color: blue;
  width: 90vh;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  padding-top: 1vh;
}

.right-span{
  background-color: red;
  width: 55vh;
  height: 7vh;
  border: 6px solid black;
}

.body-bottom{
  background-color: blue;
  width: 160vh;
  height: 60vh;
  margin-top: 8vh;
  margin-bottom: 8vh;
  border: 10px solid black;
}

.body-content{
  background-color: red;
  width: 60vh;
  height: 26vh;
}

.body-content-white{
  background-color: white;
  width: 30vh;
  height: 40vh;
  position: sticky;
  margin-left: 38vh;
  margin-top: -12vh;
}

.body-content-bottom{
  background-color: red;
  width: 60vh;
  height: 26vh;
  position: sticky;
  margin-top: -24vh;
  margin-left: 50vh;
}

.body-content-outer{
  background-color: red;
  width: 30vh;
  height: 16vh;
  position: sticky;
  margin-left: 140vh;
  margin-top: -19vh;
}

.body-content-outer-bottom{
  background-color: red;
  width: 30vh;
  height: 16vh;
  position: sticky;
  margin-left: 170vh;
  margin-top: -16vh;
}

@media screen and (max-width: 600px) {
  .top-header{
    width: auto;
    height: auto;
    /* padding: 6vh; */
    background-color: black;
  }
  .sub-header{
    display: flex;
    flex-direction: column;
    width: auto;
  }

  .sub-header-2{
    width: auto;
    height: 6vh;
  }

  .sub-header-3{
    width: auto;
    height: 6vh;
  }

  .header-body{
    display: flex;
    flex-direction: column;
    width: 40vh;
  }
  .body-left{
    width: 58vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .left-top{
    width: auto;
  }
  .left-bottom{
    width: auto;
  }
  
  .left-span{
    margin-left: 0.2vh;
    height: 10vh;
    width: 15vh;
  }

  .body-right{
    display: flex;
    flex-direction: row;
    width: 57vh;
    height: auto;
    padding: 1vh;
  }
  .right-span{
    width: 55vh;
    height: 15vh;
  }

  .body-bottom{
    display: none;
  }

  .body-content{
    display: none;
  }
  .body-content-white{
    display: none;
  }
  .body-content-bottom{
    display: none;
  }
  .body-content-outer{
    display: none;
  }
  .body-content-outer-bottom{
    display: none;
  }
}

@media screen and (max-width: 900px) {
  .sub-header{
    display: flex;
    flex-direction: column;
    width: auto;
  }

  .sub-header-2{
    width: auto;
    height: 6vh;
  }

  .sub-header-3{
    width: auto;
    height: 6vh;
  }

  .header-body{
    display: flex;
    flex-direction: column;
    width: 40vh;
  }
  .body-left{
    width: 58vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .left-top{
    width: auto;
  }
  .left-bottom{
    width: auto;
  }
  
  .left-span{
    margin-left: 0.2vh;
    height: 10vh;
    width: 15vh;
  }

  .body-right{
    display: flex;
    flex-direction: row;
    width: 57vh;
    height: auto;
    padding: 1vh;
  }
  .right-span{
    width: 55vh;
    height: 15vh;
  }

  .body-bottom{
    display: none;
  }

  .body-content{
    display: none;
  }
  .body-content-white{
    display: none;
  }
  .body-content-bottom{
    display: none;
  }
  .body-content-outer{
    display: none;
  }
  .body-content-outer-bottom{
    display: none;
  }
}
</style>
