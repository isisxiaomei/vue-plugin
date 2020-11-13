<style scope>
.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: 10px;
  font-size: 32px;
  color: white;
}
</style>
<script>
export default {
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message = 'hellovue', during = 2000) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, during)
    },
  },
  render () {
    return (
      <div class="container">
        <div class="box">
          {this.message}
        </div>
      </div>
    )
  }
}
</script>
