<!-- Header -->
<?php get_template_part('templates/header');?>
<!-- Conteudo -->
<section class="page page--blog">
    <div class="container">
		<?php echo do_shortcode('[contact-form-7 id="73" title="Form"]');?>

		<span class="input input--yoshiko">
			<input class="input__field input__field--yoshiko" type="text" id="input-10" />
			<label class="input__label input__label--yoshiko" for="input-10">
				<span class="input__label-content input__label-content--yoshiko" data-content="Bird's Color">Bird's Color</span>
			</label>
		</span>
		<span class="input input--yoshiko">
			<input class="input__field input__field--yoshiko" type="text" id="input-11" />
			<label class="input__label input__label--yoshiko" for="input-11">
				<span class="input__label-content input__label-content--yoshiko" data-content="Wing Span">Wing Span</span>
			</label>
		</span>
		<span class="input input--yoshiko">
			<input class="input__field input__field--yoshiko" type="text" id="input-12" />
			<label class="input__label input__label--yoshiko" for="input-12">
				<span class="input__label-content input__label-content--yoshiko" data-content="Beak Length">Beak Length</span>
			</label>
		</span>

		<span class="input input--haruki">
			<input class="input__field input__field--haruki" type="text" id="input-1" />
			<label class="input__label input__label--haruki" for="input-1">
				<span class="input__label-content input__label-content--haruki">First Name</span>
			</label>
		</span>

	</div>
</section>
<!-- Rodapé -->
<?php get_template_part('templates/footer');?>