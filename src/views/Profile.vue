<template>
  <html>
    <body>
      <div class="content" align="center">
        <img :src="userData.image_url" width="120px" />
        <h2 id="user" style="color: black">{{ userData.name }}</h2>
        <a
          v-if="userData.level == 'level1'"
          class="roundtag"
          style="background-color: #2d9cd8"
          >{{ userData.instrument }}🐣</a
        >
        <a
          v-if="userData.level == 'level2'"
          class="roundtag"
          style="background-color: #2d9cd8"
          >{{ userData.instrument }}🐥</a
        >
        <a
          v-if="userData.level == 'level3'"
          class="roundtag"
          style="background-color: #2d9cd8"
          >{{ userData.instrument }}🐦</a
        >
        <br />
        <a class="roundtag" style="background-color: #27ae60">{{
          userData.tag1
        }}</a>
        <a class="roundtag" style="background-color: #27ae60">{{
          userData.tag2
        }}</a>
        <a class="roundtag" style="background-color: #27ae60">{{
          userData.tag3
        }}</a>
        <h3>{{ userData.bio }}</h3>
        <h4 class="roundtag" style="background-color: #ffde3b">
          💖 {{ userData.best_num }}
        </h4>
        <h2 style="text-align: left; margin-left: 40px">Previous Projects</h2>
        <ul class="projects">
          <li
            v-for="index in previous_projects.length"
            class="project_container"
            v-bind:key="index"
          >
            <h2 class="project_text">
              {{ previous_projects[index - 1].team }}
            </h2>
            <h3 class="project_text">
              {{ previous_projects[index - 1].song }}
            </h3>
            <dl style="margin-left: 10px">
              <dt
                v-for="index2 in pre_inst_name[index - 1].length"
                :key="index2"
                style="display: inline"
              >
                <!-- <div> -->
                <h5 style="color: black; display: inline">
                  {{
                    pre_inst_name[index - 1][index2 - 1] +
                    " " +
                    pre_left_num[index - 1][index2 - 1] +
                    "/" +
                    pre_max_num[index - 1][index2 - 1]
                  }}
                </h5>
              </dt>
            </dl>
            <a class="tag">{{ previous_projects[index - 1].level }}</a>
            <button
              class="button"
              style="background-color: #f2c94c"
              @click.stop="view(previous_projects[index - 1].team)"
            >
              view
            </button>
          </li>
          <span v-if="previous_projects.length === 0"> &lt;empty&gt; </span>
        </ul>
        <button class="backbutton" v-on:click="toBack">Back</button>
        <br /><br /><br /><br /><br /><br />
      </div>
      <nav id="tabbar">
        <ul id="tab_wrap">
          <li>
            <router-link
              :to="{ path: '/library', query: { userId: $route.query.userId } }"
              ><img src="../assets/images/home.png" width="100px"
            /></router-link>
          </li>
          <li>
            <router-link
              :to="{
                path: '/projects_page',
                query: { userId: $route.query.userId },
              }"
              ><img src="../assets/images/search.png" width="100px"
            /></router-link>
          </li>
          <li>
            <router-link
              :to="{
                path: '/teamFormation',
                query: { userId: $route.query.userId },
              }"
              ><img src="../assets/images/add.png" width="100px"
            /></router-link>
          </li>
          <li>
            <img
              src="../assets/images/profile.png"
              width="100px"
              @click="myprofile"
            />
            <!-- <router-link
              :to="{
                path: '/profile',
                query: {
                  userId: $route.query.userId,
                  profileId: $route.query.userId
                }
              }"
              ><img src="../assets/images/profile.png" width="100px"
            /></router-link> -->
          </li>
        </ul>
      </nav>
    </body>
  </html>
</template>

<script>
import { firestore } from "@/firebase";
import { firestorage } from "@/firebase";
var userInfo = firebase.firestore().collection("userinfo");
var projects = firebase.firestore().collection("projects");

export default {
  // name: "profile",
  data() {
    return {
      userData: {
        age: "",
        bio: "",
        instrument: "",
        level: "",
        name: "",
        projs: [],
        projs_end: [],
        tag1: "",
        tag2: "",
        tag3: "",
        image_url: "",
        report: [],
        best_num: 0,
      },
      previous_projects: [],
      inst_name: [],
      pre_inst_name: [], // ex) [Violin, Viola, Cello]
      pre_max_num: [], // ex) [4, 4, 2]
      pre_left_num: [], // ex) [3, 3, 1] : current number of members
    };
  },
  created() {
    var userNickname = this.$route.query.profileId;
    userInfo
      .doc(userNickname)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let ui = doc.data();
          this.userData = ui;
          var my_projs = doc.data().projs_end;
          var i;
          for (i = 0; i < my_projs.length; i++) {
            var proj_entry = projects.doc(my_projs[i]);
            proj_entry.get().then((doc) => {
              var project_data = doc.data();

              var inst_name = [];
              var max_num = [];
              var left_num = [];

              var left_inst = project_data.left_inst;
              var max_inst = project_data.max_inst;

              var step;
              var curr = max_inst[0];
              var num = 1;

              // Count max_num and left_num
              for (step = 1; step < max_inst.length; step++) {
                if (curr == max_inst[step]) {
                  num++;
                } else {
                  inst_name.push(curr);
                  max_num.push(num);
                  curr = max_inst[step];
                  num = 1;
                }
                if (step == max_inst.length - 1) {
                  inst_name.push(curr);
                  max_num.push(num);
                }
              }

              inst_name.forEach(function (inst) {
                var num2 = 0;
                for (step = 0; step < left_inst.length; step++) {
                  if (inst == left_inst[step]) {
                    num2++;
                  }
                }
                left_num.push(num2);
              });

              this.previous_projects.push(project_data);
              this.pre_inst_name.push(inst_name);
              this.pre_max_num.push(max_num);
              this.pre_left_num.push(left_num);
            });
          }
        } else {
          window.alert("hing");
        }
      })
      .catch(function (error) {
        console.log("Error retrieving user info: ", error);
      });
  },
  methods: {
    view(team) {
      var userNickname = this.$route.query.userId;
      var teamName = team;
      this.$router.push({
        path: "/project_summary_joined",
        query: { userId: userNickname, projName: teamName },
        params: { userId: userNickname, projName: teamName },
      });
    },
    myprofile() {
      var userNickname = this.$route.query.userId;
      this.$router.push({
        query: { userId: userNickname, profileId: userNickname },
        params: { userId: userNickname, profileId: userNickname },
      });
      this.$router.go(0);
    },
    toBack() {
      this.$router.go(-1);
    },
  },
};
</script>
