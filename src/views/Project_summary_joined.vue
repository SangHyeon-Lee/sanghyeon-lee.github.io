<template>
  <html>
    <body>
      <div class="content" align="center">
        <img src="../assets/images/fyeesh.png" width="100" />
        <h1 style="color: black; margin: 0px">{{ $route.query.projName }}</h1>

        <div class="project_container">
          <h2 style="margin-bottom: 0px; margin-top: 0px">
            {{ projInfo.song }}
          </h2>
          <dl >
            <dt v-for="index in inst_name.length" :key="index" style="display:inline;">
              <h5 style="color: black; display:inline">
                {{
                  inst_name[index - 1] +
                  " " +
                  left_num[index - 1] +
                  "/" +
                  max_num[index - 1]
                }}
              </h5>
            </dt>
          </dl>
          <br><a class="tag" >{{ projInfo.level }}</a>
        </div>
        <h3 style="margin: 20px">
          {{ projInfo.blurb }}
        </h3>
        <h2>Members</h2>
        <ul
          v-for="member in members_url"
          v-bind:key="member.index"
          class="members_container"
        >
          <li class="member">
            <router-link
              :to="{
                path: '/profile',
                query: {
                  userId: $route.query.userId,
                  profileId: member[0],
                },
              }"
              ><img :src="member[1]" width="70px" />
            </router-link>
            <label class="member_label" for="member" style="color: black">
              <pre class="pre">{{ member[0] }}</pre>
            </label>
          </li>
        </ul>
        <br />
        <button class="backbutton" v-on:click="toBack">Back</button>
        <br /><br />
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
                query: {
                  userId: $route.query.userId,
                  profileId: $route.query.userId,
                },
              }"
              ><img src="../assets/images/add.png" width="100px"
            /></router-link>
          </li>
          <li>
            <router-link
              :to="{
                path: '/profile',
                query: {
                  userId: $route.query.userId,
                  profileId: $route.query.userId,
                },
              }"
              ><img src="../assets/images/profile.png" width="100px"
            /></router-link>
          </li>
        </ul>
      </nav>
    </body>
  </html>
</template>

<script>
import { firestore } from "@/firebase";
import { firestorage } from "@/firebase";
var project_collection = firebase.firestore().collection("projects");
var userinfo_collection = firebase.firestore().collection("userinfo");

export default {
  data() {
    return {
      projInfo: {
        team: "",
        song: "",
        parts: "",
        level: "",
        blurb: "",
        members: [],
        left_inst: [],
        max_inst: [],
        parts: [],
        ongoing: false,
      },
      userinfo: {
        name: "",
        image_url: "",
      },
      members_url: [],
      inst_name: [], // ex) [Violin, Viola, Cello]
      max_num: [], // ex) [4, 4, 2]
      left_num: [], // ex) [3, 3, 1] : current number of members
    };
  },
  created() {
    var projectName = this.$route.query.projName;
    var inst_name = this.inst_name;
    var max_num = this.max_num;
    var left_num = this.left_num;
    project_collection
      .doc(projectName)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let pi = doc.data();
          this.projInfo = pi;

          var left_inst = this.projInfo.left_inst;
          var max_inst = this.projInfo.max_inst;
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

          var i;
          for (i = 0; i < this.projInfo.members.length; i++) {
            userinfo_collection
              .doc(this.projInfo.members[i])
              .get()
              .then((doc_user) => {
                if (doc_user.exists) {
                  let user = doc_user.data();
                  this.userinfo = user;
                  this.members_url.push([
                    this.userinfo.name,
                    this.userinfo.image_url,
                    this.userinfo.best_num,
                  ]);
                }
              });
          }
        } else {
          window.alert("ERROR: No such project exist!");
        }
      })
      .catch(function (error) {
        console.log("Error retrieving project info: ", error);
      });
  },
  methods: {
    toBack() {
      this.$router.go(-1);
    },
  },
};
</script>
