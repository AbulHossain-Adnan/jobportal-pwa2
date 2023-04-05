<template lang="">
    <div>
        <div class="clearfix"></div>
        <!-- Titlebar
================================================== -->
<div id="titlebar" class="single">
	<div class="container">

		<div class="sixteen columns">
			<h2>My Account</h2>
			<nav id="breadcrumbs">
				<ul>
					<li>You are here:</li>
					<li><a href="#">Home</a></li>
					<li>My Account</li>
				</ul>
			</nav>
		</div>

	</div>
</div>


<!-- Content
================================================== -->

<!-- Container -->
<div class="container">

	<div class="my-account">

		<!-- <ul class="tabs-nav">
			<li class=""><a href="#tab1">Login</a></li>
			<li><a href="#tab2">Register</a></li>
		</ul> -->

		<div class="tabs-container">
			<!-- Login -->
			

			<!-- Register -->
			<div class="tab-content"  style="">

				<form method="post" class="register">
					
				<p class="form-row form-row-wide">
					<label for="username2">Username:
						<i class="ln ln-icon-Male"></i>
						<input type="text" class="input-text" name="username" id="username2" value="" />
					</label>
				</p>
					
				<p class="form-row form-row-wide">
					<label for="email2">Email Address:
						<i class="ln ln-icon-Mail"></i>
						<input type="text" class="input-text" name="email" id="email2" value="" />
					</label>
				</p>

				<p class="form-row form-row-wide">
					<label for="password1">Password:
						<i class="ln ln-icon-Lock-2"></i>
						<input class="input-text" type="password" name="password1" id="password1"/>
					</label>
				</p>

				<p class="form-row form-row-wide">
					<label for="password2">Repeat Password:
						<i class="ln ln-icon-Lock-2"></i>
						<input class="input-text" type="password" name="password2" id="password2"/>
					</label>
				</p>

				<p class="form-row">
					<input type="submit" class="button border fw margin-top-10" name="register" value="Register" />
				</p>

				</form>
			</div>
		</div>
	</div>
</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>