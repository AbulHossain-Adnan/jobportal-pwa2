<template lang="">
    <div>
        <!-- Titlebar
================================================== -->
<div id="titlebar" class="single">
	<div class="container">

		<div class="sixteen columns">
			<h2>Blog</h2>
			<span>Keep up to date with the latest news</span>
		</div>

	</div>
</div>


<!-- Content
================================================== -->


<div class="container">
<div class="row">
  <div class="col-sm-8">


<!-- Post -->
<div class="post-container">
	<div class="post-img">
		<router-link :to="{ name: 'single_job_blog' }"><img src="/jobportal/scoutAssets/images/blog2.jpg" alt=""></router-link>
		<div class="hover-icon"></div></div>
	<div class="post-content">
		<a href="#"><h3>Hey Job Seeker, It’s Time To Get Up And Get Hired</h3></a>
		<div class="meta-tags">
			<span>October 10, 2015</span>
			<span><a href="#">0 Comments</a></span>
		</div>
		<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p>
		
		<router-link :to="{ name: 'single_job_blog' }">Read More</router-link>
	</div>
</div>

<!-- Post -->
<div class="post-container">
	<div class="post-img"><router-link :to="{ name: 'single_job_blog' }"><img src="/jobportal/scoutAssets/images/blog2.jpg" alt=""></router-link><div class="hover-icon"></div></div>
	<div class="post-content">
		<a href="#"><h3>How to "Woo" a Recruiter and Land Your Dream Job</h3></a>
		<div class="meta-tags">
			<span>September 12, 2015</span>
			<span><a href="#">0 Comments</a></span>
		</div>
		<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p>
		 <router-link :to="{ name: 'single_job_blog' }">Read More</router-link>
	</div>
</div>

<!-- Post -->
<div class="post-container">
	<div class="post-img"><router-link :to="{ name: 'single_job_blog' }"><img src="/jobportal/scoutAssets/images/blog2.jpg" alt=""></router-link><div class="hover-icon"></div></div>
	<div class="post-content">
		<a href="#"><h3>11 Tips to Help You Get New Clients Through Cold Calling</h3></a>
		<div class="meta-tags">
			<span>August 27, 2015</span>
			<span><a href="#">0 Comments</a></span>
		</div>
		<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p>
		 <router-link :to="{ name: 'single_job_blog' }">Read More</router-link>
	</div>
</div>

<!-- Pagination -->
<div class="pagination-container">
	<nav class="pagination">
		<ul>
			<li><a href="#" class="current-page">1</a></li>
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
		</ul>
	</nav>

	<nav class="pagination-next-prev">
		<ul>
			<li><a href="#" class="prev">Previous</a></li>
			<li><a href="#" class="next">Next</a></li>
		</ul>
	</nav>
</div>


  </div>
  <div class="col-sm-4">


<!-- Search -->
<div class="widget">
	<h4>Search</h4>
	<div class="widget-box search">
		<div class="input"><input class="search-field" type="text" placeholder="To search type and hit enter" value=""/></div>
	</div>
</div>

<div class="widget">
	<h4>Got any questions?</h4>
	<div class="widget-box">
		<p>If you are having any questions, please feel free to ask.</p>
		<a href="contact.html" class="button widget-btn"><i class="fa fa-envelope"></i> Drop Us a Line</a>
	</div>
</div>

<!-- Tabs -->
<div class="widget">

	<ul class="tabs-nav blog">
		<li class="active"><a href="#tab1">Popular</a></li>
		<li><a href="#tab2">Featured</a></li>
		<li><a href="#tab3">Recent</a></li>
	</ul>

	<!-- Tabs Content -->
	<div class="tabs-container">

		<div class="tab-content" id="tab1">
			
			<!-- Recent Posts -->
			<ul class="widget-tabs">
				
				<!-- Post #1 -->
				<li>
					<div class="widget-thumb">
						<a href="blog-single-post.html"><img src="/jobportal/scoutAssets/images/blog-widget-01.png" alt="" /></a>
					</div>
					
					<div class="widget-text">
						<h5><a href="blog-single-post.html">How to "Woo" a Recruiter and Land Your Dream Job</a></h5>
						<span>September 12, 2015</span>
					</div>
					<div class="clearfix"></div>
				</li>
				
				<!-- Post #2 -->
				<li>
					<div class="widget-thumb">
						<a href="blog-single-post.html"><img src="/jobportal/scoutAssets/images/blog-widget-02.png" alt="" /></a>
					</div>
					
					<div class="widget-text">
						<h5><a href="blog-single-post.html">Hey Job Seeker, It’s Time To Get Up And Get Hired</a></h5>
						<span>October 10, 2015</span>
					</div>
					<div class="clearfix"></div>

				</li>
				
				<!-- Post #3 -->
				<li>
					<div class="widget-thumb">
						<a href="blog-single-post.html"><img src="/jobportal/scoutAssets/images/blog-widget-03.png" alt="" /></a>
					</div>
					
					<div class="widget-text">
						<h5><a href="blog-single-post.html">11 Tips to Help You Get New Clients Through Cold Calling</a></h5>
						<span>August 27, 2015</span>
					</div>
					<div class="clearfix"></div>
				</li>
			</ul>

		</div>

		<div class="tab-content" id="tab2">
		
			<!-- Featured Posts -->
			<ul class="widget-tabs">

				<!-- Post #1 -->
				<li>
					<div class="widget-thumb">
						<a href="blog-single-post.html"><img src="/jobportal/scoutAssets/images/blog-widget-02.png" alt="" /></a>
					</div>
					
					<div class="widget-text">
						<h5><a href="blog-single-post.html">Hey Job Seeker, It’s Time To Get Up And Get Hired</a></h5>
						<span>October 10, 2015</span>
					</div>
					<div class="clearfix"></div>

				</li>
				
				<!-- Post #2 -->
				<li>
					<div class="widget-thumb">
						<a href="blog-single-post.html"><img src="/jobportal/scoutAssets/images/blog-widget-01.png" alt="" /></a>
					</div>
					
					<div class="widget-text">
						<h5><a href="blog-single-post.html">How to "Woo" a Recruiter and Land Your Dream Job</a></h5>
						<span>September 12, 2015</span>
					</div>
					<div class="clearfix"></div>
				</li>
				
				<!-- Post #3 -->
				<li>
					<div class="widget-thumb">
						<a href="blog-single-post.html"><img src="/jobportal/scoutAssets/images/blog-widget-03.png" alt="" /></a>
					</div>
					
					<div class="widget-text">
						<h5><a href="blog-single-post.html">11 Tips to Help You Get New Clients Through Cold Calling</a></h5>
						<span>August 27, 2015</span>
					</div>
					<div class="clearfix"></div>
				</li>
			</ul>
		</div>

		<div class="tab-content" id="tab3">
		
			<!-- Recent Posts -->
			<ul class="widget-tabs">
				
				<!-- Post #1 -->
				<li>
					<div class="widget-thumb">
						<a href="blog-single-post.html"><img src="/jobportal/scoutAssets/images/blog-widget-03.png" alt="" /></a>
					</div>
					
					<div class="widget-text">
						<h5><a href="blog-single-post.html">11 Tips to Help You Get New Clients Through Cold Calling</a></h5>
						<span>August 27, 2015</span>
					</div>
					<div class="clearfix"></div>
				</li>
				
				<!-- Post #2 -->
				<li>
					<div class="widget-thumb">
						<a href="blog-single-post.html"><img src="/jobportal/scoutAssets/images/blog-widget-02.png" alt="" /></a>
					</div>
					
					<div class="widget-text">
						<h5><a href="blog-single-post.html">Hey Job Seeker, It’s Time To Get Up And Get Hired</a></h5>
						<span>October 10, 2015</span>
					</div>
					<div class="clearfix"></div>

				</li>
				
				<!-- Post #3 -->
				<li>
					<div class="widget-thumb">
						<a href="blog-single-post.html"><img src="/jobportal/scoutAssets/images/blog-widget-01.png" alt="" /></a>
					</div>
					
					<div class="widget-text">
						<h5><a href="blog-single-post.html">How to "Woo" a Recruiter and Land Your Dream Job</a></h5>
						<span>September 12, 2015</span>
					</div>
					<div class="clearfix"></div>
				</li>
			</ul>
		</div>
		
	</div>
</div>


<div class="widget">
	<h4>Social</h4>
		<ul class="social-icons">
			<li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
			<li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
			<li><a class="gplus" href="#"><i class="icon-gplus"></i></a></li>
			<li><a class="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
		</ul>

</div>

<div class="clearfix"></div>
<div class="margin-bottom-40"></div>


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