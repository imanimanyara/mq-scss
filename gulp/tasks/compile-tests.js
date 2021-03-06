
import notifier from 'node-notifier';
import { notification_icon_location } from '../config/shared-vars';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {

	// Sass compilation
	gulp.task('compile-tests', () => {
		return gulp.src('unit-tests/*/**/*.scss')
		.pipe(plugins.wait(100))//Helps prevent odd file not found error
		.pipe(plugins.sass({
			outputStyle: 'compressed',
			precision: 10,
			includePaths: [
				'unit-tests',
				'node_modules'
			]
		}).on('error', plugins.sass.logError))
		.pipe(gulp.dest('unit-tests'))
	});

}