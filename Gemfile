source "https://rubygems.org"

ruby "2.6.3"

gem "rails", "~> 6.0.0"
gem "pg", ">= 0.18", "< 2.0"
gem "puma", "~> 3.11"
gem "sass-rails", "~> 5"
gem "bootsnap", ">= 1.4.2", require: false
gem "rack-canonical-host"
gem "webpacker", "~> 4.0"
gem "redis", '~> 4.0'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'


# CSS frameworks
gem "normalize-rails"
gem "alom"
gem "autoprefixer-rails"

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "spring-commands-rspec"
  gem "bundler-audit", ">= 0.5.0", require: false
  gem "annotate"
end

# Test gems

group :development, :test do
  # Use Pry as your rails console
  gem 'pry-rails', '~> 0.3.9'

  # Combine 'pry' with 'byebug'. Adds 'step', 'next', 'finish', 'continue' and
  # 'break' commands to control execution.
  gem 'pry-byebug', '~> 3.8'

  gem "factory_bot_rails"
  gem "rspec-rails", "~> 3.8"
  gem "ffaker"

  # Adds support for Capybara system testing and selenium driver
  gem "capybara", ">= 2.15"
  gem 'webdrivers', '~> 4.0'
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
