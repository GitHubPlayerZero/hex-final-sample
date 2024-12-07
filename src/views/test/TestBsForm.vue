<template>
	<div class="container my-4">
		<form class="row g-3" novalidate @submit.prevent="checkData">
			<!-- 姓名 -->
			<div class="col-md-4">
				<label for="name" class="form-label">姓名</label>
				<input type="text" class="form-control" id="name" value="Mark" required />
				<div class="invalid-feedback">請輸入正確的姓名</div>
				<div class="valid-feedback">很好！</div>
			</div>

			<!-- 外號 -->
			<div class="col-md-4">
				<label for="aka" class="form-label">外號</label>
				<div class="input-group has-validation">
					<span class="input-group-text" id="inputGroupPrepend">@</span>
					<input
						type="text"
						class="form-control"
						id="aka"
						aria-describedby="inputGroupPrepend"
						required
					/>
					<div class="invalid-feedback">請為自己命名一個外號</div>
				</div>
			</div>

			<!-- 年齡 -->
			<div class="col-md-2">
				<label for="age" class="form-label">年齡</label>
				<input type="number" class="form-control" id="age" required />
				<div class="invalid-feedback">請輸入正確的年齡</div>
			</div>

			<!-- 性別 -->
			<div class="col-md-10 d-flex">
				<span>性別&nbsp;&nbsp;&nbsp;</span>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="gender"
						id="genderMale"
						value="male"
						required
					/>
					<label class="form-check-label" for="genderMale">男</label
					>&nbsp;&nbsp;&nbsp;&nbsp;
				</div>
				<div class="form-check d-flex">
					<input
						class="form-check-input"
						type="radio"
						name="gender"
						id="genderFemale"
						value="female"
						required
					/>&nbsp;
					<label class="form-check-label" for="genderFemale">女</label>&nbsp;&nbsp;&nbsp;

					<div class="invalid-feedback">請選擇性別</div>
				</div>
			</div>

			<!-- Email -->
			<div class="col-8">
				<label for="email" class="form-label">Email</label>
				<input
					type="email"
					class="form-control"
					id="email"
					pattern="\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+"
					required
				/>
				<div class="invalid-feedback">請輸入正確的 Email</div>
			</div>

			<!-- 手機 -->
			<div class="col-4">
				<label for="mobile" class="form-label">手機</label>
				<input
					type="tel"
					class="form-control"
					id="mobile"
					pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}|[0-9]{10}"
					required
				/>
				<div>請輸入 1234-123-123 或 1234123123</div>
				<div class="invalid-feedback">請輸入正確的手機</div>
			</div>

			<!-- 居住縣市 -->
			<div class="col-md-3">
				<label for="city" class="form-label">居住縣市</label>
				<select class="form-select" id="city" required>
					<option selected disabled hidden value="">---請選擇---</option>
					<option value="Taipei">台北市</option>
					<option value="Taichung">台中市</option>
					<option value="Kaohsiung">高雄市</option>
				</select>
				<div class="invalid-feedback">請選擇縣市</div>
			</div>

			<div class="col-12">
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value=""
						id="invalidCheck"
						required
					/>
					<label class="form-check-label" for="invalidCheck"> 同意 </label>
					<div class="invalid-feedback">你必須勾選同意才能繼續</div>
				</div>
			</div>
			<div class="col-12">
				<button class="btn btn-primary" type="submit">送出</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},

	methods: {
		// 檢驗資料
		checkData(event) {
			console.log(`checkData...`);

			const form = event.target;
			console.dir(form);

			form.classList.remove('was-validated');

			// 觸發 HTML 原生驗證
			// 驗證通過
			if (form.checkValidity()) {
				alert('Submit！');
			}
			// 驗證不通過
			// class 要加入 was-validated 畫面才會顯示警告訊息與樣式
			else {
				form.classList.add('was-validated');
			}
		}, // 檢驗資料 - end
	}, // methods - end
}; // export default - end
</script>
