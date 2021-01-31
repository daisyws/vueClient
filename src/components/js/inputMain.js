export default {
    props: {
      parentData: {}
    },
    data: () => ({
      valid: true,
      employeeId: '',
      employeeIdRules: [
        v => !!v || '社員IDを入力してください。',
        v => (v && v.length <= 6) || '社員IDは６桁以下で入力してください。',
      ],
      name:'',
      nameRules: [
        v => !!v || '名前を入力してください。',
        v => (v && v.length <= 20) || '名前は２０桁以下で入力してください。',
      ],
      frigana:'',
      enteringDate:'',
      enteringDateRules: [
        v => !!v || '入社年月日を入力してください。'
      ],
      menu1: false,
      menu2: false,
      menu3: false,
      certificationName:'',
      certificationNameRules: [
        v => !!v || '資格を入力してください。'
      ],
      certificationGetDate:'',
      certificationGetDateRules: [
        v => !!v || '取得日付を入力してください。'
      ],
      bonusGetDate:'',
      updateMode: false
    }),

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        if (this.parentData && this.parentData.employee_id) {
          this.employeeId = this.parentData.employee_id,
          this.name =  this.parentData.name,
          this.frigana = this.parentData.frigana,
          this.enteringDate = this.parentData.entering_date,
          this.certificationName = this.parentData.certification_name,
          this.certificationGetDate = this.parentData.get_date,
          this.bonusGetDate = this.parentData.encourage_date
          this.updateMode = true
        }
      },

      validate () {
        let _this = this;

        var succ = this.$refs.form.validate()
        console.log(succ)
        if (succ) {
          var sendData = {
            employeeId: _this.employeeId,
            name: _this.name,
            frigana: _this.frigana,
            enteringDate: _this.enteringDate,
            certificationName: _this.certificationName,
            certificationGetDate: _this.certificationGetDate,
            bonusGetDate: _this.bonusGetDate
          }

          _this.$http.post('/saveEmployeeCertification',sendData).then((res)=>{
            if(res.status == 200){
              _this.regInfo = res.data;
              if(_this.regInfo.status == 1){
                   alert('提出成功しました。');
                  this.$emit('handleSwitch','search')
              }else{
                  alert('提出失敗しました。');
              }
            }else{
                alert('エラーが発生しました。');
            }
              console.log('res.data ', res.data)
            },(err)=>{
                alert('APIエラーが発生しました。');
                console.log(err);
            });
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      back () {
        this.$emit('handleSwitch','search')
      },
    },
  }