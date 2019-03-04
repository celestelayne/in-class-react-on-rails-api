class MoviesController < ApplicationController

  # GET /movies
  def index
    @movies = Movie.all
    render json: {
      message: "ok",
      movies: @movies
    }
  end

  # GET /movies/1
  def show
    begin
      @movie = Movie.find(params[:id])
      render json: {
        message: 'ok',
        movie: @movie
      }
    rescue ActiveRecord::RecordNotFound
      render json: {
        message: 'Could not find Movie with that id'
      },
      status: 404
    rescue Exception
      render json: {
        message: 'There was some other error'
      },
      status: 500
    end
  end

  # POST /movies
  def create
    @movie = Movie.new(movie_params)
    if @movie.save
        render json: {
          message: "Movie saved succesfully."
        },
        status: 200
    else
        render json: {
          message: "There was a problem trying to save."
        },
        status: 500
    end
  end

  # PATCH/PUT /movies/1
  def update
    @movie = Movie.find(params[:id])
    if @movie.update_attributes(movie_params)
      render json: {
        message: "Movie updated succesfully."
      },
      status: 200
    else
      render json: {
        message: "There was a problem trying to update."
      },
      status: 500
    end
  end

  # DELETE /movies/1
  def destroy
    @movie = Movie.find(params[:id])
    # @movie.destroy
    if @movie.destroy
        render json: {
          message: "Movie deleted succesfully."
        },
        status: 200
    else
        render json: {
          message: "There was a problem trying to delete."
        },
        status: 500
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year, :director, :plot)
  end

end
